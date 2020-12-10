import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9080/bdbbackend_war_exploded/resources/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  registreer(gebruiksnaam: string, email: string, wachtwoord: string): Observable<any> {
    return this.http.post(AUTH_API + 'registreren', {
      gebruiksnaam,
      email,
      wachtwoord
    }, httpOptions);
  }
}
