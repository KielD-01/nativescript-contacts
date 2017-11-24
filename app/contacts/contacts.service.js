"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var ContactsService = (function () {
    function ContactsService() {
        this.collection = 'contacts';
        this.contacts = [];
        this.contact = {};
    }
    ContactsService.prototype.getContacts = function (field, order) {
        var _this = this;
        var contactsCollector = function (result) {
            if (!result.error) {
                for (var id in result.value) {
                    var contact = Object.assign({ id: id }, result.value[id]);
                    _this.contacts.push(contact);
                }
            }
            if (result.error) {
                console.log("Error in Firebase : " + result.error);
            }
        };
        firebase.query(function () {
        }, "/" + this.collection, {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: field
            }
        })
            .then(function (results) {
            contactsCollector(results);
        });
        return this.contacts;
    };
    ContactsService.prototype.getContact = function (id) {
        var _this = this;
        console.log("Receiving Information about ID of '" + id + "'");
        var contactPopulator = function (contacts) {
            if (!contacts.error) {
                _this.contact = Object.assign({ id: contacts.key }, contacts.value);
            }
        };
        firebase.query(contactPopulator, "/" + this.collection + "/" + id, {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.VALUE,
                value: 'first_name'
            }
        }).then(function (results) {
            if (!results.error) {
                _this.contact = Object.assign({ id: results.key }, results.value);
            }
            return _this.contact;
        });
        return this.contact;
    };
    ContactsService.prototype.createContact = function (contact) {
        firebase.push("/" + this.collection, contact);
    };
    ContactsService.prototype.updateContact = function (id, contact) {
        firebase.update("/" + this.collection + "/" + id, contact);
    };
    ContactsService.prototype.deleteContact = function (id) {
        firebase.remove("/" + this.collection + "/" + id);
    };
    ContactsService = __decorate([
        core_1.Injectable()
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
