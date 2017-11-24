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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5hZGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdC5hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHVEQUFtRDtBQUNuRCxrREFBOEM7QUFDOUMsK0RBQStDO0FBQy9DLG9DQUFxQztBQUNyQywwQ0FBdUM7QUFRdkM7SUFNSSw2QkFBMkIsR0FBaUIsRUFBVSxRQUF5QixFQUFVLFFBQWdCO1FBQTlFLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDckcsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFLEVBQUU7WUFDYixLQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsa0NBQUksR0FBSjtRQUNJLElBQUksTUFBTSxHQUFHLEVBQUUsRUFDWCxNQUFNLEdBQUcsbUNBQW1DLENBQUM7UUFFakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUM1QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNqQixLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixPQUFPLEVBQUUsd0RBQXdELEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDMUYsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVELENBQUMsSUFBSSxnQ0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQWhEUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUMvQixDQUFDO3lDQVFrQyw0QkFBWSxFQUFvQixrQ0FBZSxFQUFvQixlQUFNO09BTmhHLG1CQUFtQixDQWlEL0I7SUFBRCwwQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb250YWN0c1NlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3RzLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTbmFja0Jhcn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2VzL2NvbnRhY3RzL2FkZC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDb250YWN0c1NlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkQ29udGFjdENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgY29udGFjdDogYW55O1xuICAgIHNlcnZpY2U6IENvbnRhY3RzU2VydmljZTtcbiAgICByb3V0ZXI6IFJvdXRlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwQ29tcG9uZW50LCBwcml2YXRlIGNTZXJ2aWNlOiBDb250YWN0c1NlcnZpY2UsIHByaXZhdGUgbmdSb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmNvbnRhY3QgPSB7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgICAgICBwaG9uZTogJydcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBjU2VydmljZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZ1JvdXRlcjtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBsZXQgZXJyb3JzID0gW10sXG4gICAgICAgICAgICByZWdleHAgPSAvXltcXHMoKSstXSooWzAtOV1bXFxzKCkrLV0qKXs2LDIwfSQvO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRhY3QuZmlyc3RfbmFtZS5yZXBsYWNlKC8gL2dpLCBcIlwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJGaXJzdCBOYW1lIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGFjdC5sYXN0X25hbWUucmVwbGFjZSgvIC9naSwgXCJcIikubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiTGFzdCBOYW1lIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGFjdC5waG9uZS5yZXBsYWNlKC8gL2dpLCBcIlwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJQaG9uZSBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVnZXhwLnRlc3QodGhpcy5jb250YWN0LnBob25lKSkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goJ1Bob25lIGZvcm1hdCBpcyBub3QgdmFsaWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWYWxpZGF0aW9uIEVycm9yJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIHNhdmUgTmV3IGNvbnRhY3QgZHVlIHRvIG5leHQgZXJyb3JzOlxcclxcblxcclxcbicgKyBlcnJvcnMuam9pbignXFxyXFxuJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAobmV3IFNuYWNrQmFyKS5zaW1wbGUoXCJTYXZpbmcgTmV3IENvbnRhY3RcIik7XG4gICAgICAgIHRoaXMuY1NlcnZpY2UuY3JlYXRlQ29udGFjdCh0aGlzLmNvbnRhY3QpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICB9XG59Il19