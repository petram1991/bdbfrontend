import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9080/bdbbackend_war_exploded/resources/auth/';
const GEBRUIKER_SLEUTEL = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public getGebruiker(): any {
    return JSON.parse(sessionStorage.getItem(GEBRUIKER_SLEUTEL));
  }

  registreer(gebruiksnaam: string, email: string, wachtwoord: string): Observable<any> {
    return this.http.post(AUTH_API + 'registreren', {
      gebruiksnaam,
      email,
      wachtwoord
    }, httpOptions);
  }
  inloggen(gebruiksnaam: string, wachtwoord: string): Observable<any> {
    return this.http.post(AUTH_API + 'inloggen', {
      gebruiksnaam,
      wachtwoord
    }, httpOptions);
  }
}
