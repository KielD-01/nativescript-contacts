"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var ContactsComponent = (function () {
    function ContactsComponent(app, service) {
        this.app = app;
        this.service = service;
        this.contacts = ContactsComponent_1.getContacts();
    }
    ContactsComponent_1 = ContactsComponent;
    ContactsComponent.getContacts = function () {
        return [];
    };
    ContactsComponent = ContactsComponent_1 = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '../pages/contacts/list.html',
            providers: [contacts_service_1.ContactsService]
        }),
        __metadata("design:paramtypes", [app_component_1.AppComponent, contacts_service_1.ContactsService])
    ], ContactsComponent);
    return ContactsComponent;
    var ContactsComponent_1;
}());
exports.ContactsComponent = ContactsComponent;
