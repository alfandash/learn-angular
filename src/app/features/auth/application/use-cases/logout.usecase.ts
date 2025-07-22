import { Injectable } from "@angular/core";
import { TokenStorageService } from "src/app/features/auth/infrastructure/services/token-storage.service";


@Injectable({ providedIn: 'root'})
export class LogoutUseCase {
  constructor(private tokenStorage: TokenStorageService) {}
    execute() {
      this.tokenStorage.clearToken()
    }
}
