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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCx1REFBbUQ7QUFDbkQsa0RBQThDO0FBQzlDLDJEQUF1RDtBQUN2RCwwQ0FBdUQ7QUFDdkQsb0NBQXNDO0FBRXRDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBUXpEO0lBU0ksMEJBQW1CLEdBQWlCLEVBQVMsUUFBeUIsRUFBUyxRQUEyQixFQUFVLE9BQXVCLEVBQUUsUUFBZ0I7UUFBMUksUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFTLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVAzSSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBS2IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdiLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFBQSxpQkFrQkM7UUFqQkcsUUFBUSxDQUFDLEtBQUssQ0FDVjtRQUNBLENBQUMsRUFDRCxlQUFhLElBQUksQ0FBQyxFQUFJLEVBQ3RCO1lBQ0ksV0FBVyxFQUFFLElBQUk7WUFDakIsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFDckMsS0FBSyxF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Z0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb250YWN0c1NlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3RzLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250YWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9jb250YWN0cy9jb250YWN0Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RzU2VydmljZSwgQ29udGFjdHNDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb250YWN0ID0ge307XG4gICAgc2VydmljZTogQ29udGFjdHNTZXJ2aWNlO1xuICAgIGlkOiBTdHJpbmc7XG4gICAgcm91dGVyOiBSb3V0ZXI7XG4gICAgcm91dGUgOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcm92aWRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcDogQXBwQ29tcG9uZW50LCBwdWJsaWMgY1NlcnZpY2U6IENvbnRhY3RzU2VydmljZSwgcHVibGljIGNvbnRhY3RzOiBDb250YWN0c0NvbXBvbmVudCwgcHJpdmF0ZSBuZ1JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgbmdSb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmlkID0gbmdSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG4gICAgICAgIHRoaXMuc2VydmljZSA9IGNTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5nUm91dGVyO1xuICAgICAgICB0aGlzLnJvdXRlID0gbmdSb3V0ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRDb250YWN0KCk7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFjdCgpIHtcbiAgICAgICAgZmlyZWJhc2UucXVlcnkoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYC9jb250YWN0cy8ke3RoaXMuaWR9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVFdmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLlF1ZXJ5T3JkZXJCeVR5cGUuVkFMVUUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmlyc3RfbmFtZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0cy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFjdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogcmVzdWx0cy5rZXl9LCByZXN1bHRzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGZpZWxkLCBmaWVsZF90aXRsZSkge1xuXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgIHRpdGxlOiBgVXBkYXRpbmcgJHt0aGlzLmNvbnRhY3RbJ2ZpcnN0X25hbWUnXX0gJHt0aGlzLmNvbnRhY3RbJ2xhc3RfbmFtZSddfWAsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVHlwZSBuZXcgdmFsdWUgZm9yICcke2ZpZWxkX3RpdGxlfScgZmllbGRgLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dCxcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLmNvbnRhY3RbZmllbGRdXG4gICAgICAgIH0pLnRoZW4ociA9PiB7XG5cbiAgICAgICAgICAgIGlmIChyLnJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHIudGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnVwZGF0ZShgL2NvbnRhY3RzLyR7dGhpcy5pZH0vJHtmaWVsZH1gLCByLnRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29udGFjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0Q29udGFjdHMoJ2lkJywgJ2FzYycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcblxuICAgICAgICBsZXQgYSA9IHRoaXM7XG5cbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oYERvIFlvdSByZWFsbHkgd2FudCB0byByZW1vdmUgJHt0aGlzLmNvbnRhY3RbJ2ZpcnN0X25hbWUnXX0gJHt0aGlzLmNvbnRhY3RbJ2xhc3RfbmFtZSddfT9gLCBcIk5vXCIsIFtcIlllc1wiXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gXCJZZXNcIikge1xuICAgICAgICAgICAgICAgIGZpcmViYXNlLnJlbW92ZShgL2NvbnRhY3RzLyR7YS5pZH1gKTtcbiAgICAgICAgICAgICAgICBhLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19