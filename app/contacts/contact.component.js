"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var ContactComponent = (function () {
    function ContactComponent(app, service) {
        this.app = app;
        this.service = service;
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '../pages/contacts/contact.html',
            providers: [contacts_service_1.ContactsService]
        }),
        __metadata("design:paramtypes", [app_component_1.AppComponent, contacts_service_1.ContactsService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
