import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { User } from '../domain/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms',
            animate('300ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          )
        ], { optional: true })
      ])
    ])
  ]
})
export class UserListComponent implements OnChanges {
  @Input() users: User[] = [];
  @Output() userSelected = new EventEmitter<User>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      console.log('Child received users:', this.users);
    }
  }

  selectUser(user: User) {
    this.userSelected.emit(user);
  }
}
