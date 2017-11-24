import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";

import {ContactsComponent} from "./contacts/contacts.component";
import {ContactsService} from "./contacts/contacts.service";
import {ContactComponent} from "./contacts/contact.component";
import {AddContactComponent} from "./contacts/contact.add.component";
import {EditContactComponent} from "./contacts/contact.edit.component";
import {NativeScriptFormsModule} from "nativescript-angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ContactsComponent,
        ContactComponent,
        AddContactComponent,
        EditContactComponent,
    ],
    providers: [
        ContactsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
 Pass your application module to the bootstrapModule function located in main.ts to start your app
 */
export class AppModule {
}
