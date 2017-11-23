"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var contacts_component_1 = require("./contacts.component");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var ContactComponent = (function () {
    function ContactComponent(app, cService, contacts, route) {
        this.app = app;
        this.cService = cService;
        this.contacts = contacts;
        this.route = route;
        this.contact = {};
        this.provided = false;
        this.id = route.snapshot.params['id'];
        this.service = cService;
    }
    ContactComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErQztBQUMvQyx1REFBbUQ7QUFDbkQsa0RBQThDO0FBQzlDLDJEQUF1RDtBQUN2RCwwQ0FBK0M7QUFFL0MsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQ7SUFPSSwwQkFBbUIsR0FBaUIsRUFBUyxRQUF5QixFQUFTLFFBQTJCLEVBQVUsS0FBcUI7UUFBdEgsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFTLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUx6SSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdiLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFqQkcsUUFBUSxDQUFDLEtBQUssQ0FDVjtRQUNBLENBQUMsRUFDRCxlQUFhLElBQUksQ0FBQyxFQUFJLEVBQ3RCO1lBQ0ksV0FBVyxFQUFFLElBQUk7WUFDakIsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFDckMsS0FBSyxFQUFFLFlBQVk7YUFDdEI7U0FDSixDQUNKLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxPQUFPLEdBQVMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0RSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBL0JRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLHNDQUFpQixDQUFDO1NBQ2xELENBQUM7eUNBUzBCLDRCQUFZLEVBQW1CLGtDQUFlLEVBQW1CLHNDQUFpQixFQUFpQix1QkFBYztPQVBoSSxnQkFBZ0IsQ0FnQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQge0NvbnRhY3RzU2VydmljZX0gZnJvbSBcIi4vY29udGFjdHMuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RzQ29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGFjdGl2aXR5SW5kaWNhdG9yTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9jb250YWN0cy9jb250YWN0Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RzU2VydmljZSwgQ29udGFjdHNDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb250YWN0ID0ge307XG4gICAgc2VydmljZTogQ29udGFjdHNTZXJ2aWNlO1xuICAgIGlkOiBTdHJpbmc7XG4gICAgcHJvdmlkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHA6IEFwcENvbXBvbmVudCwgcHVibGljIGNTZXJ2aWNlOiBDb250YWN0c1NlcnZpY2UsIHB1YmxpYyBjb250YWN0czogQ29udGFjdHNDb21wb25lbnQsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG4gICAgICAgIHRoaXMuc2VydmljZSA9IGNTZXJ2aWNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGZpcmViYXNlLnF1ZXJ5KFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGAvY29udGFjdHMvJHt0aGlzLmlkfWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2luZ2xlRXZlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5RdWVyeU9yZGVyQnlUeXBlLlZBTFVFLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdHMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3QgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IHJlc3VsdHMua2V5fSwgcmVzdWx0cy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=