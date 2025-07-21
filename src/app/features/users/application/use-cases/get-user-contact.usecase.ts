import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/models/user.model';
import { UserApiService } from '../../infrastructure/services/user-api.service';

@Injectable({ providedIn: 'root' })
export class GetUserContactUseCase {
  constructor(private userApi: UserApiService) {}

  execute(id: number): Observable<User> {
    return this.userApi.getById(id);
  }
}
