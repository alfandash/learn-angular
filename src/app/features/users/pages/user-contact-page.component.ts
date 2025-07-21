import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserContactUseCase } from '../application/use-cases/get-user-contact.usecase';
import { User } from '../domain/models/user.model';

@Component({
  selector: 'app-user-contact-page',
  templateUrl: './user-contact-page.component.html',
})
export class UserContactPageComponent implements OnInit {
  user: User | null = null;
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private getUserContact: GetUserContactUseCase) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getUserContact.execute(id).subscribe({
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
