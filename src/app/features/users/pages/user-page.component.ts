import { Component, OnInit } from "@angular/core";
import { GetUserListUseCase } from "../application/use-cases/get-user-list.usecase";
import { User } from "../domain/models/user.model";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
})
export class UserPageComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  isLoading = true;

  constructor(private getUserList: GetUserListUseCase) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getUserList.execute().subscribe({
      next: (res) => {
        console.log('Parent received users:', res);
        this.users = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.isLoading = false;
      }
    });
  }

  onUserSelected(user: User) {
    this.selectedUser = user;
  }
}
