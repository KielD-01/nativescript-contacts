"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./contacts.service");
var app_component_1 = require("../app.component");
var dialogs = require("ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var appSettings = require("application-settings");
var ContactsComponent = (function () {
    function ContactsComponent(app, cService) {
        var _this = this;
        this.app = app;
        this.cService = cService;
        this.contacts = [];
        this.fields = {
            first_name: 'First Name',
            last_name: 'Last Name',
            phone: 'Phone'
        };
        this.types = {
            asc: 'Ascending',
            desc: 'Descending',
        };
        this.sortingTypes = {
            asc: function (a, b, field) {
                if (a['field'] < b['field'])
                    return -1;
                if (a['field'] > b['field'])
                    return 1;
                return 0;
            },
            desc: function (a, b, field) {
                if (b['field'] < a['field'])
                    return -1;
                if (b['field'] > a['field'])
                    return 1;
                return 0;
            }
        };
        this.sorting = {
            first_name: {
                asc: function (x, y) {
                    return _this.sortingTypes.asc(x, y, 'first_name');
                },
                desc: function (x, y) {
                    return _this.sortingTypes.desc(x, y, 'first_name');
                }
            },
            last_name: {
                asc: function (x, y) {
                    return _this.sortingTypes.asc(x, y, 'last_name');
                },
                desc: function (x, y) {
                    return _this.sortingTypes.desc(x, y, 'last_name');
                }
            },
            phone: {
                asc: function (x, y) {
                    return _this.sortingTypes.asc(x, y, 'phone');
                },
                desc: function (x, y) {
                    return _this.sortingTypes.desc(x, y, 'phone');
                }
            }
        };
        this.service = cService;
        this.orderBy = {
            field: 'first_name',
            type: 'asc'
        };
        this.contacts = (this.service.getContacts(this.orderBy.field, this.orderBy.type));
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.contacts.sort(this.sorting.first_name.asc);
    };
    ContactsComponent.prototype.reOrder = function () {
        this.contacts.sort(this.sorting[this.orderBy.field][this.orderBy.type]);
    };
    ContactsComponent.prototype.selectOrderField = function () {
        var _this = this;
        var component = this;
        dialogs.action({
            message: "Select Field to Order the Contacts",
            cancelButtonText: 'Cancel',
            actions: ['First Name', 'Last Name', 'Phone']
        })
            .then(function (result) {
            switch (result) {
                case 'First Name':
                    component.orderBy.field = 'first_name';
                    break;
                case 'Last Name':
                    component.orderBy.field = 'last_name';
                    break;
                case 'Phone':
                    component.orderBy.field = 'phone';
                    break;
            }
            _this.reOrder();
        });
    };
    ContactsComponent.prototype.selectOrderTypeField = function () {
        var _this = this;
        var component = this;
        dialogs.action({
            message: "Select Sorting Type",
            cancelButtonText: 'Cancel',
            actions: ['Ascending', 'Descending']
        })
            .then(function (result) {
            switch (result) {
                case 'Ascending':
                    component.orderBy.type = 'asc';
                    break;
                case 'Descending':
                    component.orderBy.type = 'desc';
                    break;
            }
            _this.reOrder();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCxrREFBOEM7QUFHOUMsb0NBQXFDO0FBRXJDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBUXBEO0lBMkRJLDJCQUFtQixHQUFpQixFQUFTLFFBQXlCO1FBQXRFLGlCQU9DO1FBUGtCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXpEdEUsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUlkLFdBQU0sR0FBRztZQUNMLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLEtBQUssRUFBRSxPQUFPO1NBQ2pCLENBQUM7UUFFRixVQUFLLEdBQUc7WUFDSixHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUsWUFBWTtTQUNyQixDQUFDO1FBRUYsaUJBQVksR0FBRztZQUNYLEdBQUcsRUFBRyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSztnQkFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUV0QyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztZQUNELElBQUksRUFBRyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSztnQkFDYixF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LEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7U0FDL0IsQ0FBQzt5Q0E2RDBCLDRCQUFZLEVBQW1CLGtDQUFlO09BM0Q3RCxpQkFBaUIsQ0E0SDdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVIRCxJQTRIQztBQTVIWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb250YWN0c1NlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3RzLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtLZXlib2FyZFR5cGV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgbnVtYmVyID0gS2V5Ym9hcmRUeXBlLm51bWJlcjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIlxuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZXMvY29udGFjdHMvbGlzdC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDb250YWN0c1NlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBjb250YWN0cyA9IFtdO1xuICAgIHNlcnZpY2U6IENvbnRhY3RzU2VydmljZTtcbiAgICBwdWJsaWMgb3JkZXJCeTogYW55O1xuXG4gICAgZmllbGRzID0ge1xuICAgICAgICBmaXJzdF9uYW1lOiAnRmlyc3QgTmFtZScsXG4gICAgICAgIGxhc3RfbmFtZTogJ0xhc3QgTmFtZScsXG4gICAgICAgIHBob25lOiAnUGhvbmUnXG4gICAgfTtcblxuICAgIHR5cGVzID0ge1xuICAgICAgICBhc2M6ICdBc2NlbmRpbmcnLFxuICAgICAgICBkZXNjOiAnRGVzY2VuZGluZycsXG4gICAgfTtcblxuICAgIHNvcnRpbmdUeXBlcyA9IHtcbiAgICAgICAgYXNjIDogKGEsYixmaWVsZCkgPT57XG4gICAgICAgICAgICBpZiAoYVsnZmllbGQnXSA8IGJbJ2ZpZWxkJ10pIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmIChhWydmaWVsZCddID4gYlsnZmllbGQnXSkgcmV0dXJuIDE7XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBkZXNjIDogKGEsYixmaWVsZCkgPT57XG4gICAgICAgICAgICBpZiAoYlsnZmllbGQnXSA8IGFbJ2ZpZWxkJ10pIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmIChiWydmaWVsZCddID4gYVsnZmllbGQnXSkgcmV0dXJuIDE7XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNvcnRpbmcgPSB7XG4gICAgICAgIGZpcnN0X25hbWU6IHtcbiAgICAgICAgICAgIGFzYzogKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0aW5nVHlwZXMuYXNjKHgseSwgJ2ZpcnN0X25hbWUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjOiAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRpbmdUeXBlcy5kZXNjKHgseSwgJ2ZpcnN0X25hbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFzdF9uYW1lOiB7XG4gICAgICAgICAgICBhc2M6ICh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydGluZ1R5cGVzLmFzYyh4LHksICdsYXN0X25hbWUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjOiAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRpbmdUeXBlcy5kZXNjKHgseSwgJ2xhc3RfbmFtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgYXNjOiAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRpbmdUeXBlcy5hc2MoeCwgeSwgJ3Bob25lJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzYzogKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0aW5nVHlwZXMuZGVzYyh4LCB5LCAncGhvbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwOiBBcHBDb21wb25lbnQsIHB1YmxpYyBjU2VydmljZTogQ29udGFjdHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IGNTZXJ2aWNlO1xuICAgICAgICB0aGlzLm9yZGVyQnkgPSB7XG4gICAgICAgICAgICBmaWVsZDogJ2ZpcnN0X25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ2FzYydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb250YWN0cyA9ICh0aGlzLnNlcnZpY2UuZ2V0Q29udGFjdHModGhpcy5vcmRlckJ5LmZpZWxkLCB0aGlzLm9yZGVyQnkudHlwZSkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRhY3RzLnNvcnQodGhpcy5zb3J0aW5nLmZpcnN0X25hbWUuYXNjKTtcbiAgICB9XG5cbiAgICByZU9yZGVyKCkge1xuICAgICAgICB0aGlzLmNvbnRhY3RzLnNvcnQodGhpcy5zb3J0aW5nW3RoaXMub3JkZXJCeS5maWVsZF1bdGhpcy5vcmRlckJ5LnR5cGVdKTtcbiAgICB9XG5cbiAgICBzZWxlY3RPcmRlckZpZWxkKCkge1xuXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuXG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2VsZWN0IEZpZWxkIHRvIE9yZGVyIHRoZSBDb250YWN0c1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBhY3Rpb25zOiBbJ0ZpcnN0IE5hbWUnLCAnTGFzdCBOYW1lJywgJ1Bob25lJ11cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRmlyc3QgTmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQub3JkZXJCeS5maWVsZCA9ICdmaXJzdF9uYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdMYXN0IE5hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm9yZGVyQnkuZmllbGQgPSAnbGFzdF9uYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdQaG9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQub3JkZXJCeS5maWVsZCA9ICdwaG9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlT3JkZXIoKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2VsZWN0T3JkZXJUeXBlRmllbGQoKSB7XG5cbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJTZWxlY3QgU29ydGluZyBUeXBlXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IFsnQXNjZW5kaW5nJywgJ0Rlc2NlbmRpbmcnXVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm9yZGVyQnkudHlwZSA9ICdhc2MnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Rlc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm9yZGVyQnkudHlwZSA9ICdkZXNjJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucmVPcmRlcigpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG59Il19