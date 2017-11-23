"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var AddContactComponent = (function () {
    function AddContactComponent(app, cService) {
        this.app = app;
        this.cService = cService;
    }
    AddContactComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './pages/contacts/add.html',
            providers: [contacts_service_1.ContactsService]
        }),
        __metadata("design:paramtypes", [app_component_1.AppComponent, contacts_service_1.ContactsService])
    ], AddContactComponent);
    return AddContactComponent;
}());
exports.AddContactComponent = AddContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5hZGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdC5hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHVEQUFtRDtBQUNuRCxrREFBOEM7QUFROUM7SUFDSSw2QkFBb0IsR0FBaUIsRUFBVSxRQUF5QjtRQUFwRCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFFeEUsQ0FBQztJQUhRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1NBQy9CLENBQUM7eUNBRzJCLDRCQUFZLEVBQW9CLGtDQUFlO09BRC9ELG1CQUFtQixDQUkvQjtJQUFELDBCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbnRhY3RzU2VydmljZX0gZnJvbSBcIi4vY29udGFjdHMuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZXMvY29udGFjdHMvYWRkLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RzU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGRDb250YWN0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwQ29tcG9uZW50LCBwcml2YXRlIGNTZXJ2aWNlOiBDb250YWN0c1NlcnZpY2UpIHtcblxuICAgIH1cbn0iXX0=