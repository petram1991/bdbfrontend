import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ArtikelServices {

  constructor(private http: HttpClient) {
  }

  private url = 'http://localhost:9080/bdbbackend_war_exploded/resources/advertenties/';

  nieuwArtikel(naam: string, omschrijving: string, prijs: number): Observable<any> {
    return this.http.post(this.url + 'nieuw', {
      naam,
      omschrijving,
      prijs
    }, httpOptions);
  }
}
