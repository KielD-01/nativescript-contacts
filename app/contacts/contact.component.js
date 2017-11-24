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
        var component = this;
        dialogs.prompt({
            title: "Updating " + this.contact['first_name'] + " " + this.contact['last_name'],
            message: "Type new value for '" + field_title + "' field",
            okButtonText: "Submit",
            cancelButtonText: "Cancel",
            inputType: dialogs.inputType.text,
            defaultText: component.contact[field]
        }).then(function (r) {
            if (r.result == true) {
                if (r.text.length > 0) {
                    component.contact[field] = r.text;
                    component.service.updateContact(_this.id, _this.contact);
                    component.getContact();
                    component.service.getContacts('id', 'asc');
                    return component.router.navigate(['']);
                }
            }
        });
    };
    ContactComponent.prototype.remove = function () {
        var a = this;
        dialogs.action("Do You really want to remove " + this.contact['first_name'] + " " + this.contact['last_name'] + "?", '', ["Yes", "No"]).then(function (result) {
            if (result == "Yes") {
                a.service.deleteContact(a.id);
                return a.router.navigate(['']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCx1REFBbUQ7QUFDbkQsa0RBQThDO0FBQzlDLDJEQUF1RDtBQUN2RCwwQ0FBdUQ7QUFDdkQsb0NBQXNDO0FBRXRDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBUXpEO0lBU0ksMEJBQW1CLEdBQWlCLEVBQVMsUUFBeUIsRUFBUyxRQUEyQixFQUFVLE9BQXVCLEVBQUUsUUFBZ0I7UUFBMUksUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFTLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVAzSSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBS2IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdiLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFBQSxpQkFrQkM7UUFqQkcsUUFBUSxDQUFDLEtBQUssQ0FDVjtRQUNBLENBQUMsRUFDRCxlQUFhLElBQUksQ0FBQyxFQUFJLEVBQ3RCO1lBQ0ksV0FBVyxFQUFFLElBQUk7WUFDakIsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFDckMsS0FBSyxF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YyxFQUFZLGVBQU07T0FUcEosZ0JBQWdCLENBOEU1QjtJQUFELHVCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29udGFjdHNTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0cy5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGFjdHNDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZXMvY29udGFjdHMvY29udGFjdC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDb250YWN0c1NlcnZpY2UsIENvbnRhY3RzQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29udGFjdCA9IHt9O1xuICAgIHNlcnZpY2U6IENvbnRhY3RzU2VydmljZTtcbiAgICBpZDogU3RyaW5nO1xuICAgIHJvdXRlcjogUm91dGVyO1xuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcm92aWRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcDogQXBwQ29tcG9uZW50LCBwdWJsaWMgY1NlcnZpY2U6IENvbnRhY3RzU2VydmljZSwgcHVibGljIGNvbnRhY3RzOiBDb250YWN0c0NvbXBvbmVudCwgcHJpdmF0ZSBuZ1JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgbmdSb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmlkID0gbmdSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG4gICAgICAgIHRoaXMuc2VydmljZSA9IGNTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5nUm91dGVyO1xuICAgICAgICB0aGlzLnJvdXRlID0gbmdSb3V0ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRDb250YWN0KCk7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFjdCgpIHtcbiAgICAgICAgZmlyZWJhc2UucXVlcnkoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYC9jb250YWN0cy8ke3RoaXMuaWR9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVFdmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLlF1ZXJ5T3JkZXJCeVR5cGUuVkFMVUUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmlyc3RfbmFtZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0cy5lcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFjdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogcmVzdWx0cy5rZXl9LCByZXN1bHRzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGZpZWxkLCBmaWVsZF90aXRsZSkge1xuXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgIHRpdGxlOiBgVXBkYXRpbmcgJHt0aGlzLmNvbnRhY3RbJ2ZpcnN0X25hbWUnXX0gJHt0aGlzLmNvbnRhY3RbJ2xhc3RfbmFtZSddfWAsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVHlwZSBuZXcgdmFsdWUgZm9yICcke2ZpZWxkX3RpdGxlfScgZmllbGRgLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dCxcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBjb21wb25lbnQuY29udGFjdFtmaWVsZF1cbiAgICAgICAgfSkudGhlbihyID0+IHtcbiAgICAgICAgICAgIGlmIChyLnJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHIudGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5jb250YWN0W2ZpZWxkXSA9IHIudGV4dDtcblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuc2VydmljZS51cGRhdGVDb250YWN0KHRoaXMuaWQsIHRoaXMuY29udGFjdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5nZXRDb250YWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnNlcnZpY2UuZ2V0Q29udGFjdHMoJ2lkJywgJ2FzYycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcblxuICAgICAgICBsZXQgYSA9IHRoaXM7XG5cbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oYERvIFlvdSByZWFsbHkgd2FudCB0byByZW1vdmUgJHt0aGlzLmNvbnRhY3RbJ2ZpcnN0X25hbWUnXX0gJHt0aGlzLmNvbnRhY3RbJ2xhc3RfbmFtZSddfT9gLCAnJywgW1wiWWVzXCIsIFwiTm9cIl0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBcIlllc1wiKSB7XG4gICAgICAgICAgICAgICAgYS5zZXJ2aWNlLmRlbGV0ZUNvbnRhY3QoYS5pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=