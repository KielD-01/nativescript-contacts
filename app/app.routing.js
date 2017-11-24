"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var contacts_component_1 = require("./contacts/contacts.component");
var contact_component_1 = require("./contacts/contact.component");
var contact_add_component_1 = require("./contacts/contact.add.component");
var contact_edit_component_1 = require("./contacts/contact.edit.component");
var routes = [
    { path: "", redirectTo: "/contacts", pathMatch: "full" },
    { path: "contacts", component: contacts_component_1.ContactsComponent },
    { path: "contact/:id", component: contact_component_1.ContactComponent },
    { path: "contacts/add", component: contact_add_component_1.AddContactComponent },
    { path: "contact/edit/:id", component: contact_edit_component_1.EditContactComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2QyxzREFBcUU7QUFFckUsb0VBQWdFO0FBQ2hFLGtFQUE4RDtBQUM5RCwwRUFBcUU7QUFDckUsNEVBQXVFO0FBRXZFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFDdEQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztJQUNoRCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7SUFDdEQsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFDO0NBQzlELENBQUM7QUFNRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtDb250YWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZENvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3QuYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdC5lZGl0LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7cGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvY29udGFjdHNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIn0sXG4gICAge3BhdGg6IFwiY29udGFjdHNcIiwgY29tcG9uZW50OiBDb250YWN0c0NvbXBvbmVudH0sXG4gICAge3BhdGg6IFwiY29udGFjdC86aWRcIiwgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJjb250YWN0cy9hZGRcIiwgY29tcG9uZW50OiBBZGRDb250YWN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJjb250YWN0L2VkaXQvOmlkXCIsIGNvbXBvbmVudDogRWRpdENvbnRhY3RDb21wb25lbnR9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG59Il19