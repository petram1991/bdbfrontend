import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Gebruiker} from '../modals/gebruiker';

const api = 'http://localhost:9080/bdbbackend_war_exploded/resources/auth/';
const GEBRUIKER_SLEUTEL = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  ingelogdeGebruiker = {} as Gebruiker;
  ingelogdeGebruiksnaam = new Subject<string>();
  message$ = new Subject<string>();

  registreer(gebruiksnaam: string, email: string, wachtwoord: string): Observable<any> {
    return this.http.post(api + 'registreren', {
      gebruiksnaam,
      email,
      wachtwoord
    }, httpOptions);
  }
  inloggen(gebruiksnaam: string, wachtwoord: string): Observable<any> {
    return this.http.post(api + 'inloggen', {
      gebruiksnaam,
      wachtwoord
    }, httpOptions);
  }
  login(gebruiker: Gebruiker): void {
    this.http.post<Gebruiker>( api + 'login', gebruiker).subscribe(
      data => {
        this.ingelogdeGebruiker = data;
        this.ingelogdeGebruiksnaam.next(this.ingelogdeGebruiker.gebruiksnaam);
        this.message$.next(`gebruiker ${data.gebruiksnaam} is ingelogd.`);
      }
    );
  }
}
