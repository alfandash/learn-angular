import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/models/user.model';
import { UserApiService } from '../../infrastructure/services/user-api.service';

@Injectable({ providedIn: 'root' })
export class GetUserListUseCase {
  constructor(private userApi: UserApiService) {}

  execute(): Observable<User[]> {
    return this.userApi.getAll();
  }
}
