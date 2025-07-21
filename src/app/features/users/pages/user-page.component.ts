import { Component, OnInit } from "@angular/core";
import { GetUserListUseCase } from "../application/use-cases/get-user-list.usecase";
import { User } from "../domain/models/user.model";

@Component({
  selector: "app-usage-page",
  templateUrl: "./user-page.component.html",
})

export class UserPageComponent implements OnInit {
  users: User[]=[];

  constructor(private getUserList: GetUserListUseCase) {}

  ngOnInit(): void {
    this.getUserList.execute().subscribe({
      next: (res) => {
        console.log(res, '--- users');
        this.users = res;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
