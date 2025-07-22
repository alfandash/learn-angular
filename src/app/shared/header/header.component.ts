import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IsAuthenticatedUseCase } from 'src/app/features/users/application/use-cases/is-authenticated.usecase';
import { LogoutUseCase } from 'src/app/features/users/application/use-cases/logout.usecase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private logOutUseCase: LogoutUseCase,
    private router: Router,
    private isAuthenticated: IsAuthenticatedUseCase,
  ){}

  logout() {
    this.logOutUseCase.execute();
    this.router.navigate(['/login'])
  }

  login() {
    this.router.navigate(['/login'])
  }

  get loggedIn(): boolean {
    return this.isAuthenticated.execute();
  }

}
