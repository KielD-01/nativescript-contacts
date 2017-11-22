import {Component} from "@angular/core";
import * as dialogs from "ui/dialogs";
const firebase = require("nativescript-plugin-firebase");

const appSettings = require("application-settings");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor() {

        firebase.init({
            persist: true
        });

        if (!appSettings.getBoolean('app_greet', false)) {
            dialogs
                .confirm({
                    title: "Contacts App",
                    message: "Welcome to our contacts Application!\r\n" +
                    "Here You will be able to replace Your first contacts app with this one.\r\nHave fun!",
                    okButtonText: "Thanks!",
                    cancelButtonText: "Don't Show Me It Anymore"
                })
                .then(result => {
                    appSettings.setBoolean('app_greet', !result);
                });
        }
    }
}
