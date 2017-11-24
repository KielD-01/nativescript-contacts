"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var dialogs = require("ui/dialogs");
var router_1 = require("@angular/router");
var AddContactComponent = (function () {
    function AddContactComponent(app, cService, ngRouter) {
        this.app = app;
        this.cService = cService;
        this.ngRouter = ngRouter;
        this.contact = {
            first_name: '',
            last_name: '',
            phone: ''
        };
        this.service = cService;
        this.router = ngRouter;
    }
    AddContactComponent.prototype.save = function () {
        var errors = [], regexp = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
        if (this.contact.first_name.replace(/ /gi, "").length == 0) {
            errors.push("First Name is required");
        }
        if (this.contact.last_name.replace(/ /gi, "").length == 0) {
            errors.push("Last Name is required");
        }
        if (this.contact.phone.replace(/ /gi, "").length == 0) {
            errors.push("Phone is required");
        }
        if (!regexp.test(this.contact.phone)) {
            errors.push('Phone format is not valid');
        }
        if (errors.length > 0) {
            return dialogs.alert({
                title: 'Validation Error',
                message: 'Failed to save New contact due to next errors:\r\n\r\n' + errors.join('\r\n')
            });
        }
        (new nativescript_snackbar_1.SnackBar).simple("Saving New Contact");
        this.cService.createContact(this.contact);
        return this.router.navigate(['']);
    };
    AddContactComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './pages/contacts/add.html',
            providers: [contacts_service_1.ContactsService]
        }),
        __metadata("design:paramtypes", [app_component_1.AppComponent, contacts_service_1.ContactsService, router_1.Router])
    ], AddContactComponent);
    return AddContactComponent;
}());
exports.AddContactComponent = AddContactComponent;
