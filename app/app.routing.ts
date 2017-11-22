import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactComponent} from "./contacts/contact.component";

const routes: Routes = [
    { path: "", redirectTo: "/contacts", pathMatch: "full" },
    { path: "contacts", component: ContactsComponent},
    { path: "contact/:id", component: ContactComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }