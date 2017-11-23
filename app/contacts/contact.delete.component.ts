import {Component} from "@angular/core";
import {AppComponent} from "../app.component";
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/edit.html'
})

export class DeleteContactComponent {
    constructor(private app: AppComponent) {
    }
}