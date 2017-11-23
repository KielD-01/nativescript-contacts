"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("../app.component");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var EditContactComponent = (function () {
    function EditContactComponent(app, route) {
        this.app = app;
        this.id = route.snapshot.params.id;
        this.getContact();
    }
    EditContactComponent.prototype.getContact = function () {
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
            }
        });
    };
    EditContactComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './pages/contacts/edit.html'
        }),
        __metadata("design:paramtypes", [app_component_1.AppComponent, router_1.ActivatedRoute])
    ], EditContactComponent);
    return EditContactComponent;
}());
exports.EditContactComponent = EditContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3QuZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsa0RBQThDO0FBQzlDLDBDQUErQztBQUUvQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU96RDtJQUtJLDhCQUFvQixHQUFpQixFQUFFLEtBQXFCO1FBQXhDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDakMsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQUEsaUJBaUJDO1FBaEJHLFFBQVEsQ0FBQyxLQUFLLENBQ1Y7UUFDQSxDQUFDLEVBQ0QsZUFBYSxJQUFJLENBQUMsRUFBSSxFQUN0QjtZQUNJLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE9BQU8sRUFBRTtnQkFDTCxJQUFJLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUs7Z0JBQ3JDLEtBQUssRUFBRSxZQUFZO2FBQ3RCO1NBQ0osQ0FDSixDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsT0FBTyxHQUFTLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0JRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDO3lDQU8yQiw0QkFBWSxFQUFTLHVCQUFjO09BTG5ELG9CQUFvQixDQTRCaEM7SUFBRCwyQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZXMvY29udGFjdHMvZWRpdC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRDb250YWN0Q29tcG9uZW50IHtcblxuICAgIGlkOiBTdHJpbmc7XG4gICAgY29udGFjdDogT2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHA6IEFwcENvbXBvbmVudCwgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFjdCgpO1xuICAgIH1cblxuICAgIGdldENvbnRhY3QoKSB7XG4gICAgICAgIGZpcmViYXNlLnF1ZXJ5KFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGAvY29udGFjdHMvJHt0aGlzLmlkfWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2luZ2xlRXZlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5RdWVyeU9yZGVyQnlUeXBlLlZBTFVFLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdHMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3QgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IHJlc3VsdHMua2V5fSwgcmVzdWx0cy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=