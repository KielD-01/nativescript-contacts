"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var firebase = require("nativescript-plugin-firebase");
var appSettings = require("application-settings");
var ContactsComponent = (function () {
    function ContactsComponent(app, cService) {
        this.app = app;
        this.cService = cService;
        this.contacts = [];
        this.field = 'id';
        this.order = 'asc';
        this.service = cService;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.contacts = this.service.getContacts(this.field, this.order);
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './pages/contacts/list.html',
            providers: [contacts_service_1.ContactsService]
        }),
        __metadata("design:paramtypes", [app_component_1.AppComponent, contacts_service_1.ContactsService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
