import { inject, Injectable } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { IsAuthenticatedUseCase } from "../../application/use-cases/is-authenticated.usecase";


export const AuthGuard: CanActivateFn = () => {

  const isAuthenticated = inject(IsAuthenticatedUseCase);
  const router = inject(Router);


   if (isAuthenticated.execute()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
}
