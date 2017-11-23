import {Component} from "@angular/core";
import {AppComponent} from "../app.component";
import {ActivatedRoute} from "@angular/router";
import * as dialogs from "ui/dialogs"
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/edit.html'
})

export class EditContactComponent {

    id: String;
    contact: Object;

    constructor(private app: AppComponent, route: ActivatedRoute) {
        this.id = route.snapshot.params.id;
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
}