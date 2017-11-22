"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var contacts_component_1 = require("./contacts.component");
var router_1 = require("@angular/router");
var ContactComponent = (function () {
    function ContactComponent(app, service, contacts, route) {
        this.app = app;
        this.service = service;
        this.contacts = contacts;
        this.route = route;
        this.contact = {};
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './pages/contacts/contact.html',
            providers: [contacts_service_1.ContactsService, contacts_component_1.ContactsComponent]
        }),
        __metadata("design:paramtypes", [app_component_1.AppComponent, contacts_service_1.ContactsService, contacts_component_1.ContactsComponent, router_1.ActivatedRoute])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2Qyx1REFBbUQ7QUFDbkQsa0RBQThDO0FBQzlDLDJEQUF1RDtBQUN2RCwwQ0FBK0M7QUFRL0M7SUFJSSwwQkFBbUIsR0FBaUIsRUFBUyxPQUF3QixFQUFTLFFBQTJCLEVBQVUsS0FBcUI7UUFBckgsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUZ4SSxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBSWIsQ0FBQztJQU5RLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLHNDQUFpQixDQUFDO1NBQ2xELENBQUM7eUNBTTBCLDRCQUFZLEVBQWtCLGtDQUFlLEVBQW1CLHNDQUFpQixFQUFpQix1QkFBYztPQUovSCxnQkFBZ0IsQ0FPNUI7SUFBRCx1QkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQge0NvbnRhY3RzU2VydmljZX0gZnJvbSBcIi4vY29udGFjdHMuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RzQ29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9jb250YWN0cy9jb250YWN0Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RzU2VydmljZSwgQ29udGFjdHNDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCB7XG5cbiAgICBjb250YWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwOiBBcHBDb21wb25lbnQsIHB1YmxpYyBzZXJ2aWNlOiBDb250YWN0c1NlcnZpY2UsIHB1YmxpYyBjb250YWN0czogQ29udGFjdHNDb21wb25lbnQsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cbiAgICB9XG59Il19