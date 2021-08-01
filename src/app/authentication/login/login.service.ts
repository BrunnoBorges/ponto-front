import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './models/login.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly PATH: string = 'auth/authenticate'

  constructor(private http: HttpClient) { }

  sendLogin(login: Login): Observable<any> {
    return this.http.post(environment.baseUrl + this.PATH, login);
  }
}
