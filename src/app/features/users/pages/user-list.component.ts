import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../domain/models/user.model";


@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of userss">
       <a href="#" (click)="selectUser(user, $event)">{{user.name}}</a>
      </li>
    </ul>
  `
})
export class UserListComponent {
  @Input() userss: User[] = [];
  @Output() userSelected = new EventEmitter<User>();

  selectUser(user: User, event: Event) {
    event.preventDefault()
    this.userSelected.emit(user)
  }
}
