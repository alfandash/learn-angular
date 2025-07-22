import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { IsAuthenticatedUseCase } from "../../application/use-cases/is-authenticated.usecase";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private isAuthenticated: IsAuthenticatedUseCase,
    private router: Router
  ){}

  canActivate(): boolean {
    if (this.isAuthenticated.execute()) {
      return true;
    }
    this.router.navigate(['/login'])
    return false
  }
}
