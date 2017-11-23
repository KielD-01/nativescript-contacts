"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var contacts_component_1 = require("./contacts/contacts.component");
var contacts_service_1 = require("./contacts/contacts.service");
var contact_component_1 = require("./contacts/contact.component");
var contact_add_component_1 = require("./contacts/contact.add.component");
var contact_edit_component_1 = require("./contacts/contact.edit.component");
var contact_delete_component_1 = require("./contacts/contact.delete.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = (function () {
    /*
     Pass your application module to the bootstrapModule function located in main.ts to start your app
     */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                contacts_component_1.ContactsComponent,
                contact_component_1.ContactComponent,
                contact_add_component_1.AddContactComponent,
                contact_edit_component_1.EditContactComponent,
                contact_delete_component_1.DeleteContactComponent,
            ],
            providers: [
                item_service_1.ItemService,
                contacts_service_1.ContactsService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
         Pass your application module to the bootstrapModule function located in main.ts to start your app
         */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLDZDQUErQztBQUMvQyxpREFBNkM7QUFFN0Msb0RBQWdEO0FBQ2hELG9FQUFnRTtBQUNoRSxnRUFBNEQ7QUFDNUQsa0VBQThEO0FBQzlELDBFQUFxRTtBQUNyRSw0RUFBdUU7QUFDdkUsZ0ZBQTJFO0FBRTNFLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQTZCdEU7SUFIQTs7T0FFRztJQUNIO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUEzQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLHNDQUFpQjtnQkFDakIsb0NBQWdCO2dCQUNoQiwyQ0FBbUI7Z0JBQ25CLDZDQUFvQjtnQkFDcEIsaURBQXNCO2FBQ3pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLGtDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7V0FFRztPQUNVLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQUFBLEFBREQsSUFDQztBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtJdGVtU2VydmljZX0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udGFjdHNDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250YWN0c1NlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3RzLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRkQ29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdC5hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge0VkaXRDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0cy9jb250YWN0LmVkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0RlbGV0ZUNvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3QuZGVsZXRlLmNvbXBvbmVudFwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdHNDb21wb25lbnQsXG4gICAgICAgIENvbnRhY3RDb21wb25lbnQsXG4gICAgICAgIEFkZENvbnRhY3RDb21wb25lbnQsXG4gICAgICAgIEVkaXRDb250YWN0Q29tcG9uZW50LFxuICAgICAgICBEZWxldGVDb250YWN0Q29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxuICAgICAgICBDb250YWN0c1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuIFBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiAqL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=