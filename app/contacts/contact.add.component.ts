import {Component} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";
import {SnackBar} from "nativescript-snackbar";
import * as dialogs from "ui/dialogs"
import {Router} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/add.html',
    providers: [ContactsService]
})

export class AddContactComponent {

    public contact: any;
    service: ContactsService;
    router: Router;

    public constructor(private app: AppComponent, private cService: ContactsService, private ngRouter: Router) {
        this.contact = {
            first_name: '',
            last_name: '',
            phone: ''
        };

        this.service = cService;
        this.router = ngRouter;
    }

    save() {
        let errors = [],
            regexp = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;

        if (this.contact.first_name.replace(/ /gi, "").length == 0) {
            errors.push("First Name is required");
        }

        if (this.contact.last_name.replace(/ /gi, "").length == 0) {
            errors.push("Last Name is required");
        }

        if (this.contact.phone.replace(/ /gi, "").length == 0) {
            errors.push("Phone is required");
        }

        if (!regexp.test(this.contact.phone)) {
            errors.push('Phone format is not valid')
        }

        if (errors.length > 0) {
            return dialogs.alert({
                title: 'Validation Error',
                message: 'Failed to save New contact due to next errors:\r\n\r\n' + errors.join('\r\n')
            })
        }

        (new SnackBar).simple("Saving New Contact");
        this.cService.createContact(this.contact);

        return this.router.navigate(['']);
    }
}