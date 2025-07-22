import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginUseCase } from "../application/use-cases/login.usecase";
import { Router } from "@angular/router";
import { Observable } from "rxjs";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit, AfterViewInit, OnDestroy {
  loginForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private loginUseCase: LoginUseCase,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    console.log('constructor');
  }

  obs = new Observable((observer) => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });

  ngOnInit(): void {
    console.log('ngOnInit');
    this.obs.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.obs.subscribe({
      next: (value) => {
        console.log(value, 'after view init');
      },
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.disable();
      this.loginUseCase.execute(this.loginForm.value).subscribe({
        next: () => this.router.navigate(['/']),
        error: () => {
          this.error = 'Login Failed';
          this.loginForm.enable();
        },
      });
    }
  }
}
