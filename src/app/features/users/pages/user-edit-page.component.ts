import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GetUserDetailUseCase } from '../application/use-cases/get-user-detail.usecase';
import { UserApiService } from '../infrastructure/services/user-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html'
})


export class UserEditPageComponent implements OnInit{
  userForm: FormGroup;
  submitting = false;
  userId!:number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private getUserDetail: GetUserDetailUseCase,
    private userApi: UserApiService,
    private router: Router,
    private snackBar: MatSnackBar,
  ){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
    });
  }


  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUserDetail.execute(this.userId).subscribe({
      next: (user) => {
        console.log(user, '=')
        this.userForm.patchValue(user);
      },
      error: () => {
        this.snackBar.open('User not found.', 'Close', { duration: 3000 })
        this.router.navigate(['/users']);
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid && !this.submitting) {
      this.submitting = true;
      this.userForm.disable();
      this.userApi
        .update({ id: this.userId, ...this.userForm.value })
        .subscribe({
          next: () => {
            const ref = this.snackBar.open(
              'User updated successfully!',
              'Close',
              { duration: 3000 }
            );
            ref.afterDismissed().subscribe(() => {
              this.submitting = false;
              this.userForm.enable();
              this.router.navigate(['/users', this.userId]);
            });
          },
          error: () => {
            const ref = this.snackBar.open('Failed to update user.', 'Close', {
              duration: 3000,
            });
            ref.afterDismissed().subscribe(() => {
              this.submitting = false;
              this.userForm.enable();
            });
          },
        });
    }
  }
}
