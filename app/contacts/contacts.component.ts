import {Component, OnInit} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";
import {KeyboardType} from "tns-core-modules/ui/enums";
import number = KeyboardType.number;
import * as dialogs from "ui/dialogs"

const firebase = require("nativescript-plugin-firebase");
const appSettings = require("application-settings");

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/list.html',
    providers: [ContactsService]
})

export class ContactsComponent implements OnInit{

    contacts = [];
    service: ContactsService;
    public orderBy: any;

    fields = {
        first_name: 'First Name',
        last_name: 'Last Name',
        phone: 'Phone'
    };

    types = {
        asc: 'Ascending',
        desc: 'Descending',
    };

    sortingTypes = {
        asc : (a,b,field) =>{
            if (a['field'] < b['field']) return -1;
            if (a['field'] > b['field']) return 1;

            return 0;
        },
        desc : (a,b,field) =>{
            if (b['field'] < a['field']) return -1;
            if (b['field'] > a['field']) return 1;

            return 0;
        }
    };

    sorting = {
        first_name: {
            asc: (x, y) => {
                return this.sortingTypes.asc(x,y, 'first_name');
            },
            desc: (x, y) => {
                return this.sortingTypes.desc(x,y, 'first_name');
            }
        },
        last_name: {
            asc: (x, y) => {
                return this.sortingTypes.asc(x,y, 'last_name');
            },
            desc: (x, y) => {
                return this.sortingTypes.desc(x,y, 'last_name');
            }
        },
        phone: {
            asc: (x, y) => {
                return this.sortingTypes.asc(x, y, 'phone');
            },
            desc: (x, y) => {
                return this.sortingTypes.desc(x, y, 'phone');
            }
        }
    };

    constructor(public app: AppComponent, public cService: ContactsService) {
        this.service = cService;
        this.orderBy = {
            field: 'first_name',
            type: 'asc'
        };
        this.contacts = (this.service.getContacts());
    }

    ngOnInit() {
        this.contacts.sort(this.sorting.first_name.asc);
    }

    reOrder() {
        this.contacts.sort(this.sorting[this.orderBy.field][this.orderBy.type]);
    }

    selectOrderField() {

        let component = this;

        dialogs.action({
            message: "Select Field to Order the Contacts",
            cancelButtonText: 'Cancel',
            actions: ['First Name', 'Last Name', 'Phone']
        })
            .then(result => {
                switch (result) {
                    case 'First Name':
                        component.orderBy.field = 'first_name';
                        break;
                    case 'Last Name':
                        component.orderBy.field = 'last_name';
                        break;
                    case 'Phone':
                        component.orderBy.field = 'phone';
                        break;
                }

                this.reOrder();
            })
    }

    selectOrderTypeField() {

        let component = this;

        dialogs.action({
            message: "Select Sorting Type",
            cancelButtonText: 'Cancel',
            actions: ['Ascending', 'Descending']
        })
            .then(result => {
                switch (result) {
                    case 'Ascending':
                        component.orderBy.type = 'asc';
                        break;
                    case 'Descending':
                        component.orderBy.type = 'desc';
                        break;
                }

                this.reOrder();
            })
    }
}