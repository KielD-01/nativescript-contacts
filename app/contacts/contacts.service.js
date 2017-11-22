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
        var contactsCollector = function (result) {
            if (!result.error) {
                for (var id in result.value) {
                    var contact = Object.assign({ id: id }, result.value[id]);
                    _this.contacts.push(contact);
                }
            }
            if (result.error) {
                console.log("Error in Firebase : " + result.error);
            }
            console.log(JSON.stringify(_this.contacts));
        };
        firebase.query(contactsCollector, "/" + this.collection, {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: field
            }
        });
        console.log('Contacts List : ' + JSON.stringify(this.contacts));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFHekQ7SUFEQTtRQUdZLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDekIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQW1EekIsQ0FBQztJQWpERyxxQ0FBVyxHQUFYLFVBQVksS0FBYSxFQUFFLEtBQWE7UUFBeEMsaUJBZ0NDO1FBOUJHLElBQUksaUJBQWlCLEdBQUcsVUFBQyxNQUFNO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLE9BQU8sR0FBUyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7WUFDTCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7UUFFRixRQUFRLENBQUMsS0FBSyxDQUNWLGlCQUFpQixFQUNqQixNQUFJLElBQUksQ0FBQyxVQUFZLEVBQ3JCO1lBQ0ksV0FBVyxFQUFFLElBQUk7WUFDakIsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFDckMsS0FBSyxFQUFFLEtBQUs7YUFDZjtTQUNKLENBQ0osQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVoRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7SUFFckIsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxPQUFlO0lBQzdCLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsRUFBVSxFQUFFLE9BQWU7SUFFekMsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxFQUFVO0lBRXhCLENBQUM7SUFwRFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO09BQ0EsZUFBZSxDQXNEM0I7SUFBRCxzQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGFjdHNTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgY29sbGVjdGlvbiA9ICdjb250YWN0cyc7XG4gICAgcHVibGljIGNvbnRhY3RzID0gW107XG5cbiAgICBnZXRDb250YWN0cyhmaWVsZDogU3RyaW5nLCBvcmRlcjogU3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IGNvbnRhY3RzQ29sbGVjdG9yID0gKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiByZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhY3QgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6IGlkfSwgcmVzdWx0LnZhbHVlW2lkXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFjdHMucHVzaChjb250YWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIEZpcmViYXNlIDogXCIgKyByZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnRhY3RzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlyZWJhc2UucXVlcnkoXG4gICAgICAgICAgICBjb250YWN0c0NvbGxlY3RvcixcbiAgICAgICAgICAgIGAvJHt0aGlzLmNvbGxlY3Rpb259YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaW5nbGVFdmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLlF1ZXJ5T3JkZXJCeVR5cGUuQ0hJTEQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnQ29udGFjdHMgTGlzdCA6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnRhY3RzKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFjdHM7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFjdChpZDogU3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBjcmVhdGVDb250YWN0KGNvbnRhY3Q6IE9iamVjdCkge1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbnRhY3QoaWQ6IFN0cmluZywgY29udGFjdDogT2JqZWN0KSB7XG5cbiAgICB9XG5cbiAgICBkZWxldGVDb250YWN0KGlkOiBTdHJpbmcpIHtcblxuICAgIH1cblxufSJdfQ==