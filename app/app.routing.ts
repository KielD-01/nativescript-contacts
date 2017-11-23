import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactComponent} from "./contacts/contact.component";
import {AddContactComponent} from "./contacts/contact.add.component";
import {EditContactComponent} from "./contacts/contact.edit.component";
import {DeleteContactComponent} from "./contacts/contact.delete.component";

const routes: Routes = [
    { path: "", redirectTo: "/contacts", pathMatch: "full" },
    { path: "contacts", component: ContactsComponent},
    { path: "contact/:id", component: ContactComponent},
    { path: "contacts/add", component: AddContactComponent},
    { path: "contact/edit/:id", component: EditContactComponent},
    { path: "contact/edit/:id", component: DeleteContactComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }