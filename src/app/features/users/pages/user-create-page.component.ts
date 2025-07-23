import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../infrastructure/services/user-api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-create-page',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.scss']
})
export class UserCreatePageComponent {

  userForm: FormGroup;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private userApi: UserApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
   this.userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
   });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submitting = true;
      this.userForm.disable()
      this.userApi.create(this.userForm.value).subscribe( {
        next: () => {
          const ref = this.snackBar.open('User created successfully!', 'Close', {duration: 3000})

          ref.afterDismissed().subscribe(() => {
            this.submitting = false;
            this.router.navigate(['/users']);
          })
        },
        error: () => {
          const ref = this.snackBar.open('Failed to create user.', 'Close', { duration: 3000 })

          ref.afterDismissed().subscribe(() => {
             this.submitting = false;
            this.router.navigate(['/users']);
          });
        }
      })
    }
  }
}
