"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var contacts_component_1 = require("./contacts/contacts.component");
var contact_component_1 = require("./contacts/contact.component");
var contact_add_component_1 = require("./contacts/contact.add.component");
var contact_edit_component_1 = require("./contacts/contact.edit.component");
var contact_delete_component_1 = require("./contacts/contact.delete.component");
var routes = [
    { path: "", redirectTo: "/contacts", pathMatch: "full" },
    { path: "contacts", component: contacts_component_1.ContactsComponent },
    { path: "contact/:id", component: contact_component_1.ContactComponent },
    { path: "contacts/add", component: contact_add_component_1.AddContactComponent },
    { path: "contact/edit/:id", component: contact_edit_component_1.EditContactComponent },
    { path: "contact/delete/:id", component: contact_delete_component_1.DeleteContactComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2QyxzREFBcUU7QUFFckUsb0VBQWdFO0FBQ2hFLGtFQUE4RDtBQUM5RCwwRUFBcUU7QUFDckUsNEVBQXVFO0FBQ3ZFLGdGQUEyRTtBQUUzRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7SUFDakQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztJQUNuRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFDO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBQztJQUM1RCxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUM7Q0FDbkUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtDb250YWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZENvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3QuYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdC5lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEZWxldGVDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0cy9jb250YWN0LmRlbGV0ZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9jb250YWN0c1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImNvbnRhY3RzXCIsIGNvbXBvbmVudDogQ29udGFjdHNDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJjb250YWN0LzppZFwiLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJjb250YWN0cy9hZGRcIiwgY29tcG9uZW50OiBBZGRDb250YWN0Q29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiY29udGFjdC9lZGl0LzppZFwiLCBjb21wb25lbnQ6IEVkaXRDb250YWN0Q29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiY29udGFjdC9kZWxldGUvOmlkXCIsIGNvbXBvbmVudDogRGVsZXRlQ29udGFjdENvbXBvbmVudH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==