import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {ItemDetailComponent} from "./item/item-detail.component";
import {ContactsComponent} from "./contacts/contacts.component";

const routes: Routes = [
    { path: "", redirectTo: "/contacts", pathMatch: "full" },
    { path: "contacts", component: ContactsComponent},
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }