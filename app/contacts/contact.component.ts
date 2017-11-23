import {Component, OnInit} from "@angular/core"
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";
import {ContactsComponent} from "./contacts.component";
import {ActivatedRoute} from "@angular/router";
import * as activityIndicatorModule from "tns-core-modules/ui/activity-indicator";
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/contact.html',
    providers: [ContactsService, ContactsComponent]
})

export class ContactComponent implements OnInit {

    contact = {};
    service: ContactsService;
    id: String;
    provided = false;

    constructor(public app: AppComponent, public cService: ContactsService, public contacts: ContactsComponent, private route: ActivatedRoute) {
        this.id = route.snapshot.params['id'];
        this.service = cService;
    }

    ngOnInit(): void {

        firebase.query(
            () => {
            },
            `/contacts/${this.id}`,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.VALUE,
                    value: 'first_name'
                }
            }
        ).then(results => {
            if (!results.error) {
                this.contact = (<any>Object).assign({id: results.key}, results.value);
                this.provided = true;
            }
        });
    }
}