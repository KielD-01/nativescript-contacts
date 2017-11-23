import {Component} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/add.html',
    providers: [ContactsService]
})

export class AddContactComponent {
    constructor(private app: AppComponent, private cService: ContactsService) {

    }
}