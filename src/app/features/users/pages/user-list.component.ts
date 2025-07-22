import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../domain/models/user.model";


@Component({
  selector: 'app-user-list',
  template: `
    <ul class="user-list">
      <li class="user-list__item" *ngFor="let user of userss">
        <a class="user-list__link" href="#" (click)="selectUser(user, $event)">
          {{ user.name }}
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() userss: User[] = [];
  @Output() userSelected = new EventEmitter<User>();

  selectUser(user: User, event: Event) {
    event.preventDefault();
    this.userSelected.emit(user);
  }
}
