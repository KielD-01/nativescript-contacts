"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var contacts_component_1 = require("./contacts/contacts.component");
var contacts_service_1 = require("./contacts/contacts.service");
var contact_component_1 = require("./contacts/contact.component");
var contact_add_component_1 = require("./contacts/contact.add.component");
var contact_edit_component_1 = require("./contacts/contact.edit.component");
var nativescript_angular_1 = require("nativescript-angular");
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
                app_routing_1.AppRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                contacts_component_1.ContactsComponent,
                contact_component_1.ContactComponent,
                contact_add_component_1.AddContactComponent,
                contact_edit_component_1.EditContactComponent,
            ],
            providers: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLDZDQUErQztBQUMvQyxpREFBNkM7QUFFN0Msb0VBQWdFO0FBQ2hFLGdFQUE0RDtBQUM1RCxrRUFBOEQ7QUFDOUQsMEVBQXFFO0FBQ3JFLDRFQUF1RTtBQUN2RSw2REFBNkQ7QUFFN0QsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBNEJ0RTtJQUhBOztPQUVHO0lBQ0g7SUFDQSxDQUFDO0lBRFksU0FBUztRQTFCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLDhDQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixzQ0FBaUI7Z0JBQ2pCLG9DQUFnQjtnQkFDaEIsMkNBQW1CO2dCQUNuQiw2Q0FBb0I7YUFDdkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztXQUVHO09BQ1UsU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge0NvbnRhY3RzQ29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGFjdHNTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0cy9jb250YWN0cy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZENvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3QuYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdC5lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdHNDb21wb25lbnQsXG4gICAgICAgIENvbnRhY3RDb21wb25lbnQsXG4gICAgICAgIEFkZENvbnRhY3RDb21wb25lbnQsXG4gICAgICAgIEVkaXRDb250YWN0Q29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvbnRhY3RzU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG4gUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuICovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==