import {Injectable} from "@angular/core"
const firebase = require("nativescript-plugin-firebase");

@Injectable()
export class ContactsService {

    private collection = 'contacts';
    private contacts = [];
    private contact = {};

    getContacts() {
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
        };

        firebase.query(
            () => {
            },
            `/${this.collection}`,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.KEY
                }
            }
        )
            .then((results) => {
                contactsCollector(results);
            });

        return this.contacts;
    }

    getContact(id: String) {
        console.log(`Receiving Information about ID of '${id}'`);

        let contactPopulator = (contacts) => {
            if (!contacts.error) {
                this.contact = (<any>Object).assign({id: contacts.key}, contacts.value);
            }
        };

        firebase.query(
            contactPopulator,
            `/${this.collection}/${id}`,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.VALUE,
                    value: 'first_name'
                }
            }
        ).then(results => {
            if (!results.error) {
                this.contact = (<any>Object).assign({id: results.key}, results.value);
            }

            return this.contact;
        });

        return this.contact;
    }

    createContact(contact: Object) {
        firebase.push(`/${this.collection}`, contact);
    }

    updateContact(id: String, contact: Object) {
        firebase.update(`/${this.collection}/${id}`, contact);
    }

    deleteContact(id: String) {
        firebase.remove(`/${this.collection}/${id}`);
    }

}