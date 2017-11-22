import {Component} from "@angular/core"
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";

@Component({
    selector: 'my-app',
    template: '../pages/contacts/list.html',
    providers: [ContactsService]
})

export class ContactsComponent {

    contacts: Array<Object>;

    constructor (public app: AppComponent, public service : ContactsService) {
        this.contacts = ContactsComponent.getContacts();
    }

    static getContacts(){
        return [];
    }

}