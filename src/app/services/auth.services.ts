import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Gebruiker} from '../modals/gebruiker';

const api = 'http://localhost:9080/bdbbackend_war_exploded/resources/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  ingelogdeGebruiker = {} as Gebruiker;
  ingelogdeGebruiksnaam$ = new Subject<string>();
  message$ = new Subject<string>();

  registreer(gebruiksnaam: string, email: string, wachtwoord: string): Observable<any> {
    return this.http.post(api + 'registreren', {
      gebruiksnaam,
      email,
      wachtwoord
    }, httpOptions);
  }

  // login(gebruiksnaam: string, wachtwoord: string): Observable<any> {
  //   return this.http.post(api + 'inloggen', {
  //     gebruiksnaam,
  //     wachtwoord
  //   }, httpOptions);
  // }
  inloggen(gebruiksnaam: string, wachtwoord: string): void {
    this.http.post<Gebruiker>(api + 'inloggen', {gebruiksnaam, wachtwoord}).subscribe(
      response => {
        this.ingelogdeGebruiker = response;
        this.ingelogdeGebruiksnaam$.next(this.ingelogdeGebruiker.gebruiksnaam);
        this.message$.next(`gebruiker ${response.gebruiksnaam} is ingelogd.`);
      },
      error => {
        console.log(error);
        this.message$.next(`inloggen is mislukt. ${error.statusText}`);
      }
    );
  }

}
