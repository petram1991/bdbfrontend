import {Component} from '@angular/core';
import {ArtikelServices} from '../../services/artikel.services';
import {ActivatedRoute, Router} from '@angular/router';
import {Artikel} from '../../modals/artikel';

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

  constructor(private artikelService: ArtikelServices,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  newArtikel = {} as Artikel;

  onSubmit(): void {
    const {naam, omschrijving, prijs} = this.form;
    this.artikelService.nieuwArtikel(naam, omschrijving, prijs).subscribe(
      data => {
        console.log(data);
        this.mislukt = false;
        this.router.navigate(['/test'], {relativeTo: this.route});
      },
      error => {
        this.errorMessage = error.error.massage;
        this.mislukt = true;
      }
    );
  }
  addArtikel(): void {
    this.artikelService.nieuw(this.newArtikel);
    this.newArtikel = {} as Artikel;
    this.router.navigate(['/'], {relativeTo: this.route});
  }
}
