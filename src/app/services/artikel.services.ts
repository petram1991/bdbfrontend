import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Artikel} from '../modals/artikel';

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

  artikelsUpdated$ = new Subject<Artikel[]>();

  geefAlles(): Observable<Artikel[]> {
    this.http.get<Artikel[]>(this.url).subscribe(artikels => this.artikelsUpdated$.next(artikels)
    );
    return this.artikelsUpdated$;
  }

  geefEen(a: Artikel): void {
    this.http.get<Artikel[]>(`${this.url}/${a.id}`)
      .subscribe(() => this.geefAlles());
  }
  geefArtikel(id): Observable<Artikel> {
    return this.http.get<Artikel>(this.url + id);
  }

  nieuw(a: Artikel): void {
    this.http.post<Artikel[]>(this.url + 'nieuw', a).subscribe(() => this.geefAlles());
  }

  nieuwArtikel(naam: string, omschrijving: string, prijs: number): Observable<any> {
    return this.http.post(this.url + 'nieuw', {
      naam,
      omschrijving,
      prijs
    }, httpOptions);
  }
}
