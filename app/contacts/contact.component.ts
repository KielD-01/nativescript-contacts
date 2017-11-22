import {Component} from "@angular/core"
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";
import {ContactsComponent} from "./contacts.component";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/contact.html',
    providers: [ContactsService, ContactsComponent]
})

export class ContactComponent {

    contact = {};

    constructor(public app: AppComponent, public service: ContactsService, public contacts: ContactsComponent, private route: ActivatedRoute) {

    }
}