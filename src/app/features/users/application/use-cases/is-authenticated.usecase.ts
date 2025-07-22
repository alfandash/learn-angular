import { Injectable } from "@angular/core";
import { TokenStorageService } from "../../infrastructure/services/token-storage.service";



@Injectable({ providedIn: 'root'})
export class IsAuthenticatedUseCase {
  constructor(private tokenStorage: TokenStorageService) {}

  execute(): boolean {
    return !!this.tokenStorage.getToken();
  }
}
