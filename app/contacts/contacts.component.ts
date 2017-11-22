import {Component, OnInit} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";

const firebase = require("nativescript-plugin-firebase");
const appSettings = require("application-settings");

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/list.html',
    providers: [ContactsService]
})

export class ContactsComponent implements OnInit {

    contacts = [];
    field = 'id';
    order = 'asc';

    ngOnInit(): void {
    }

    constructor(public app: AppComponent, public cService: ContactsService) {
        this.contacts = cService.getContacts(this.field, this.order);
        console.log(this.contacts);
    }
}