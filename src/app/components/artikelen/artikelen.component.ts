import { Component } from '@angular/core';
import {ArtikelServices} from '../../services/artikel.services';

@Component({
  selector: 'app-artikelen',
  templateUrl: './artikelen.component.html',
  styleUrls: ['./artikelen.component.css']
})
export class ArtikelenComponent {

  form: any = {
    naam: null,
    omschrijving: null,
    prijs: null
  };
  mislukt = false;
  errorMessage = '';
  constructor(private artikelService: ArtikelServices) {}
  onSubmit(): void {
    const { naam, omschrijving, prijs } = this.form;
    this.artikelService.nieuwArtikel(naam, omschrijving, prijs).subscribe(
      data => {
        console.log(data);
        this.mislukt = false;
      },
      error => {
        this.errorMessage = error.error.massage;
        this.mislukt = true;
      }
    );
  }
}
