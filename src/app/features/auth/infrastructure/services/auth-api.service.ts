import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserCredentials } from "../../domain/models/user-credentials.model";
import { Observable } from "rxjs";
import { AuthToken } from "../../domain/models/auth-token.model";


@Injectable({ providedIn: 'root'})
export class AuthApiService {
  private baseUrl = '/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: UserCredentials): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.baseUrl}/login`, credentials);
  }
}
