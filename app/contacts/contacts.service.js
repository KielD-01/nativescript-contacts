"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var ContactsService = (function () {
    function ContactsService() {
        this.collection = 'contacts';
        this.contacts = [];
    }
    ContactsService.prototype.getContacts = function (field, order) {
        var _this = this;
        firebase.query(function (result) {
            var contacts = [];
            if (!result.error) {
                for (var id in result.value) {
                    var contact = Object.assign({ id: id }, result.value[id]);
                    contacts.push(contact);
                }
            }
            if (result.error) {
                console.log("Error in Firebase : " + result.error);
            }
            return _this.contacts = contacts;
        }, "/" + this.collection, {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: field
            }
        });
        console.log("Contacts : " + this.contacts);
        return this.contacts;
    };
    ContactsService.prototype.getContact = function (id) {
    };
    ContactsService.prototype.createContact = function (contact) {
    };
    ContactsService.prototype.updateContact = function (id, contact) {
    };
    ContactsService.prototype.deleteContact = function (id) {
    };
    ContactsService = __decorate([
        core_1.Injectable()
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFHekQ7SUFEQTtRQUdZLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDdEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQW9ENUIsQ0FBQztJQWxERyxxQ0FBVyxHQUFYLFVBQVksS0FBYSxFQUFFLEtBQWE7UUFBeEMsaUJBaUNDO1FBaENHLFFBQVEsQ0FBQyxLQUFLLENBQ1YsVUFBQyxNQUFNO1lBRUgsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBRWxCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLE9BQU8sR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztZQUNMLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXBDLENBQUMsRUFDRCxNQUFJLElBQUksQ0FBQyxVQUFZLEVBQ3JCO1lBQ0ksV0FBVyxFQUFFLElBQUk7WUFDakIsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFDckMsS0FBSyxFQUFFLEtBQUs7YUFDZjtTQUNKLENBQ0osQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXpCLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsRUFBVTtJQUVyQixDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLE9BQWU7SUFDN0IsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxFQUFVLEVBQUUsT0FBZTtJQUV6QyxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLEVBQVU7SUFFeEIsQ0FBQztJQXJEUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7T0FDQSxlQUFlLENBdUQzQjtJQUFELHNCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250YWN0c1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBjb2xsZWN0aW9uID0gJ2NvbnRhY3RzJztcbiAgICBwcm90ZWN0ZWQgY29udGFjdHMgPSBbXTtcblxuICAgIGdldENvbnRhY3RzKGZpZWxkOiBTdHJpbmcsIG9yZGVyOiBTdHJpbmcpIHtcbiAgICAgICAgZmlyZWJhc2UucXVlcnkoXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29udGFjdHMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhY3QgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgcmVzdWx0LnZhbHVlW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0cy5wdXNoKGNvbnRhY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIEZpcmViYXNlIDogXCIgKyByZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhY3RzID0gY29udGFjdHM7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBgLyR7dGhpcy5jb2xsZWN0aW9ufWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2luZ2xlRXZlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5RdWVyeU9yZGVyQnlUeXBlLkNISUxELFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYENvbnRhY3RzIDogJHt0aGlzLmNvbnRhY3RzfWApO1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWN0cztcblxuICAgIH1cblxuICAgIGdldENvbnRhY3QoaWQ6IFN0cmluZykge1xuXG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFjdChjb250YWN0OiBPYmplY3QpIHtcbiAgICB9XG5cbiAgICB1cGRhdGVDb250YWN0KGlkOiBTdHJpbmcsIGNvbnRhY3Q6IE9iamVjdCkge1xuXG4gICAgfVxuXG4gICAgZGVsZXRlQ29udGFjdChpZDogU3RyaW5nKSB7XG5cbiAgICB9XG5cbn0iXX0=