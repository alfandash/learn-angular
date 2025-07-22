import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUseCase } from '../application/use-cases/login.usecase';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  error: string | null = null;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private loginUseCase: LoginUseCase,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid && !this.submitting) {
      this.submitting = true;
      this.error = null;
      this.loginUseCase.execute(this.loginForm.value).subscribe({
        next: () => this.router.navigate(['/users']),
        error: (err: any) => {
          this.error = 'Login failed. Please check your credentials.';
          this.submitting = false;
        }
      });
    }
  }
}
