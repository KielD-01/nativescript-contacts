"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var contacts_component_1 = require("./contacts.component");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var ContactComponent = (function () {
    function ContactComponent(app, cService, contacts, ngRoute, ngRouter) {
        this.app = app;
        this.cService = cService;
        this.contacts = contacts;
        this.ngRoute = ngRoute;
        this.contact = {};
        this.provided = false;
        this.id = ngRoute.snapshot.params['id'];
        this.service = cService;
        this.router = ngRouter;
        this.route = ngRoute;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.getContact();
    };
    ContactComponent.prototype.getContact = function () {
        var _this = this;
        firebase.query(function () {
        }, "/contacts/" + this.id, {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.VALUE,
                value: 'first_name'
            }
        }).then(function (results) {
            if (!results.error) {
                _this.contact = Object.assign({ id: results.key }, results.value);
                _this.provided = true;
            }
        });
    };
    ContactComponent.prototype.update = function (field, field_title) {
        var _this = this;
        dialogs.prompt({
            title: "Updating " + this.contact['first_name'] + " " + this.contact['last_name'],
            message: "Type new value for '" + field_title + "' field",
            okButtonText: "Submit",
            cancelButtonText: "Cancel",
            inputType: dialogs.inputType.text,
            defaultText: this.contact[field]
        }).then(function (r) {
            if (r.result == true) {
                if (r.text.length > 0) {
                    firebase.update("/contacts/" + _this.id + "/" + field, r.text);
                    _this.getContact();
                    _this.service.getContacts('id', 'asc');
                    _this.router.navigate(['']);
                }
            }
        });
    };
    ContactComponent.prototype.remove = function () {
        var a = this;
        dialogs.action("Do You really want to remove " + this.contact['first_name'] + " " + this.contact['last_name'] + "?", "No", ["Yes"]).then(function (result) {
            console.log("Dialog result: " + result);
            if (result == "Yes") {
                firebase.remove("/contacts/" + a.id);
                a.router.navigate(['']);
            }
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './pages/contacts/contact.html',
            providers: [contacts_service_1.ContactsService, contacts_component_1.ContactsComponent]
        }),
        __metadata("design:paramtypes", [app_component_1.AppComponent, contacts_service_1.ContactsService, contacts_component_1.ContactsComponent, router_1.ActivatedRoute, router_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
