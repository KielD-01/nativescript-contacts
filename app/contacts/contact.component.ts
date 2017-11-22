import {Component} from "@angular/core"
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";

@Component({
    selector: 'my-app',
    template: '../pages/contacts/contact.html',
    providers: [ContactsService]
})

export class ContactComponent {
    constructor(public app: AppComponent, public service: ContactsService) {
    }
}