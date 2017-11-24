import {Component} from "@angular/core";
import {AppComponent} from "../app.component";
import {ActivatedRoute, Router} from "@angular/router";
const firebase = require("nativescript-plugin-firebase");
import * as dialogs from "ui/dialogs"
import {ContactsService} from "./contacts.service";
import {SnackBar} from "nativescript-snackbar";

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/edit.html'
})

export class EditContactComponent {

    public contact: any;
    id: String;
    service: ContactsService;
    router: Router;

    constructor(private app: AppComponent, route: ActivatedRoute, cService: ContactsService, ngRouter: Router) {
        this.service = cService;
        this.router = ngRouter;
        this.id = route.snapshot.params.id;
        this.contact = {
            first_name: '',
            last_name: '',
            phone: ''
        };

        this.getContact();
    }

    getContact() {
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
            }
        });
    }

    update() {
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
                message: 'Failed to update contact due to next errors:\r\n\r\n' + errors.join('\r\n')
            })
        }

        this.service.updateContact(this.id, this.contact);
        (new SnackBar).simple("Contact has been updated");

        return this.router.navigate(['']);
    }
}