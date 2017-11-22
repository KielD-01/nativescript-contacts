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
    service: ContactsService;
    field = 'id';
    order = 'asc';

    ngOnInit(): void {
        this.contacts = this.service.getContacts(this.field, this.order);
    }

    constructor(public app: AppComponent, public cService: ContactsService) {
        this.service = cService;
    }
}