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
        this.contacts = cService.getContacts(this.field, this.order);
        console.log(this.contacts);
    }
    ContactsComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCxrREFBOEM7QUFFOUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRcEQ7SUFTSSwyQkFBbUIsR0FBaUIsRUFBUyxRQUF5QjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFQdEUsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBTVYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFORCxvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVBRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1NBQy9CLENBQUM7eUNBVzBCLDRCQUFZLEVBQW1CLGtDQUFlO09BVDdELGlCQUFpQixDQWE3QjtJQUFELHdCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29udGFjdHNTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0cy5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4uL2FwcC5jb21wb25lbnRcIjtcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2VzL2NvbnRhY3RzL2xpc3QuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdHNTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnRhY3RzID0gW107XG4gICAgZmllbGQgPSAnaWQnO1xuICAgIG9yZGVyID0gJ2FzYyc7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwOiBBcHBDb21wb25lbnQsIHB1YmxpYyBjU2VydmljZTogQ29udGFjdHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY29udGFjdHMgPSBjU2VydmljZS5nZXRDb250YWN0cyh0aGlzLmZpZWxkLCB0aGlzLm9yZGVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWN0cyk7XG4gICAgfVxufSJdfQ==