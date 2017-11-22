import {Injectable} from "@angular/core"
const firebase = require("nativescript-plugin-firebase");

@Injectable()
export class ContactsService {

    private collection = 'contacts';
    public contacts = [];

    getContacts(field: String, order: String) {

        let contactsCollector = (result) => {
            if (!result.error) {
                for (let id in result.value) {
                    let contact = (<any>Object).assign({id: id}, result.value[id]);
                    this.contacts.push(contact);
                }
            }

            if (result.error) {
                console.log("Error in Firebase : " + result.error);
            }

            console.log(JSON.stringify(this.contacts));
        };

        firebase.query(
            contactsCollector,
            `/${this.collection}`,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.CHILD,
                    value: field
                }
            }
        );

        console.log('Contacts List : ' + JSON.stringify(this.contacts));

        return this.contacts;
    }

    getContact(id: String) {

    }

    createContact(contact: Object) {
    }

    updateContact(id: String, contact: Object) {

    }

    deleteContact(id: String) {

    }

}