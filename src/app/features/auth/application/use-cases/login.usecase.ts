import { Injectable } from "@angular/core";
import { AuthApiService } from "../../infrastructure/services/auth-api.service";
import { TokenStorageService } from "../../infrastructure/services/token-storage.service";
import { UserCredentials } from "../../domain/models/user-credentials.model";
import { Observable, tap } from "rxjs";
import { AuthToken } from "../../domain/models/auth-token.model";


@Injectable({ providedIn: 'root'})
export class LoginUseCase {
  constructor(
    private authApi: AuthApiService,
    private tokenStorage: TokenStorageService
  ){}

  execute(credentials: UserCredentials): Observable<AuthToken> {
    return this.authApi.login(credentials).pipe(
      tap(token => this.tokenStorage.setToken(token.accessToken))
    )
  }
}
