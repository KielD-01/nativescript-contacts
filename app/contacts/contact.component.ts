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
    route: ActivatedRoute;
    provided = false;

    constructor(public app: AppComponent, public cService: ContactsService, public contacts: ContactsComponent, private ngRoute: ActivatedRoute, ngRouter: Router) {
        this.id = ngRoute.snapshot.params['id'];
        this.service = cService;
        this.router = ngRouter;
        this.route = ngRoute;
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

        let component = this;

        dialogs.prompt({
            title: `Updating ${this.contact['first_name']} ${this.contact['last_name']}`,
            message: `Type new value for '${field_title}' field`,
            okButtonText: "Submit",
            cancelButtonText: "Cancel",
            inputType: dialogs.inputType.text,
            defaultText: component.contact[field]
        }).then(r => {
            if (r.result == true) {
                if (r.text.length > 0) {
                    component.contact[field] = r.text;

                    component.service.updateContact(this.id, this.contact);
                    component.getContact();

                    component.service.getContacts('id', 'asc');
                    return component.router.navigate(['']);
                }
            }
        });
    }

    remove() {

        let a = this;

        dialogs.action(`Do You really want to remove ${this.contact['first_name']} ${this.contact['last_name']}?`, '', ["Yes", "No"]).then(function (result) {
            if (result == "Yes") {
                a.service.deleteContact(a.id);
                return a.router.navigate(['']);
            }
        });
    }

}