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
        this.contacts = this.service.getContacts(this.field, this.order);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCxrREFBOEM7QUFFOUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRcEQ7SUFPSSwyQkFBbUIsR0FBaUIsRUFBUyxRQUF5QjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFMdEUsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBR1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFiUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUMvQixDQUFDO3lDQVMwQiw0QkFBWSxFQUFtQixrQ0FBZTtPQVA3RCxpQkFBaUIsQ0FlN0I7SUFBRCx3QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbnRhY3RzU2VydmljZX0gZnJvbSBcIi4vY29udGFjdHMuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9jb250YWN0cy9saXN0Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RzU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb250YWN0cyA9IFtdO1xuICAgIHNlcnZpY2U6IENvbnRhY3RzU2VydmljZTtcbiAgICBmaWVsZCA9ICdpZCc7XG4gICAgb3JkZXIgPSAnYXNjJztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHA6IEFwcENvbXBvbmVudCwgcHVibGljIGNTZXJ2aWNlOiBDb250YWN0c1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gY1NlcnZpY2U7XG4gICAgICAgIHRoaXMuY29udGFjdHMgPSB0aGlzLnNlcnZpY2UuZ2V0Q29udGFjdHModGhpcy5maWVsZCwgdGhpcy5vcmRlcik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59Il19