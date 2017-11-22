"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var appSettings = require("application-settings");
var AppComponent = (function () {
    function AppComponent() {
        firebase.init({
            persist: true
        });
        if (!appSettings.getBoolean('app_greet', false)) {
            dialogs
                .confirm({
                title: "Contacts App",
                message: "Welcome to our contacts Application!\r\n" +
                    "Here You will be able to replace Your first contacts app with this one.\r\nHave fun!",
                okButtonText: "Thanks!",
                cancelButtonText: "Don't Show Me It Anymore"
            })
                .then(function (result) {
                appSettings.setBoolean('app_greet', !result);
            });
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsb0NBQXNDO0FBQ3RDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBT3BEO0lBQ0k7UUFFSSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1YsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsT0FBTztpQkFDRixPQUFPLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE9BQU8sRUFBRSwwQ0FBMEM7b0JBQ25ELHNGQUFzRjtnQkFDdEYsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLGdCQUFnQixFQUFFLDBCQUEwQjthQUMvQyxDQUFDO2lCQUNELElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDTCxDQUFDO0lBcEJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7T0FFVyxZQUFZLENBcUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgcGVyc2lzdDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ2FwcF9ncmVldCcsIGZhbHNlKSkge1xuICAgICAgICAgICAgZGlhbG9nc1xuICAgICAgICAgICAgICAgIC5jb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29udGFjdHMgQXBwXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiV2VsY29tZSB0byBvdXIgY29udGFjdHMgQXBwbGljYXRpb24hXFxyXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIkhlcmUgWW91IHdpbGwgYmUgYWJsZSB0byByZXBsYWNlIFlvdXIgZmlyc3QgY29udGFjdHMgYXBwIHdpdGggdGhpcyBvbmUuXFxyXFxuSGF2ZSBmdW4hXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJUaGFua3MhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiRG9uJ3QgU2hvdyBNZSBJdCBBbnltb3JlXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldEJvb2xlYW4oJ2FwcF9ncmVldCcsICFyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19