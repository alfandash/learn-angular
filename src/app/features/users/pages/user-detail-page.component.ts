import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserDetailUseCase } from '../application/use-cases/get-user-detail.usecase';
import { User } from '../domain/models/user.model';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
})
export class UserDetailPageComponent implements OnInit {
  user: User | null = null;
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private getUserDetail: GetUserDetailUseCase) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getUserDetail.execute(id).subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'User not found or error fetching user.';
        this.loading = false;
      }
    });
  }
}
