import {Component} from "@angular/core";
import {AppComponent} from "../app.component";
@Component({
    selector: 'my-app',
    templateUrl: './pages/contacts/edit.html'
})

export class DeleteContactComponent {
    constructor(private app: AppComponent) {
    }
}