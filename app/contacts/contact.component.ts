import {Component, OnInit} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {AppComponent} from "../app.component";
import {ContactsComponent} from "./contacts.component";
import {ActivatedRoute, Router} from "@angular/router";
import * as dialogs from "ui/dialogs";

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
    router: Router;
    provided = false;

    constructor(public app: AppComponent, public cService: ContactsService, public contacts: ContactsComponent, private route: ActivatedRoute, ngRouter: Router) {
        this.id = route.snapshot.params['id'];
        this.service = cService;
        this.router = ngRouter;
    }

    ngOnInit(): void {
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
                this.provided = true;
            }
        });
    }

    update(field, field_title) {

        dialogs.prompt({
            title: `Updating ${this.contact['first_name']} ${this.contact['last_name']}`,
            message: `Type new value for '${field_title}' field`,
            okButtonText: "Submit",
            cancelButtonText: "Cancel",
            inputType: dialogs.inputType.text,
            defaultText: this.contact[field]
        }).then(r => {

            if (r.result == true) {
                if (r.text.length > 0) {
                    firebase.update(`/contacts/${this.id}/${field}`, r.text);

                    this.getContact();
                    this.service.getContacts('id', 'asc');
                    this.router.navigate(['']);
                }
            }
        });
    }
}