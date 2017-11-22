import {Injectable} from "@angular/core"
const firebase = require("nativescript-plugin-firebase");

@Injectable()
export class ContactsService {

    private collection = 'contacts';
    protected contacts = [];

    getContacts(field: String, order: String) {
        firebase.query(
            (result) => {

                let contacts = [];

                if (!result.error) {
                    for (let id in result.value) {
                        let contact = (<any>Object).assign({id: id}, result.value[id]);
                        contacts.push(contact);
                    }
                }

                if (result.error) {
                    console.log("Error in Firebase : " + result.error);
                }

                return this.contacts = contacts;

            },
            `/${this.collection}`,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.CHILD,
                    value: field
                }
            }
        );

        console.log(`Contacts : ${this.contacts}`);
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