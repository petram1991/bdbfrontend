import {Component, OnInit} from '@angular/core';
import {ArtikelServices} from '../../services/artikel.services';
import {ActivatedRoute, Router} from '@angular/router';
import {Artikel} from '../../modals/artikel';

@Component({
  selector: 'app-een-artikel',
  templateUrl: './een-artikel.component.html',
  styleUrls: ['./een-artikel.component.css']
})
export class EenArtikelComponent implements OnInit {

  id: number;
  artikel: Artikel;

  constructor(private artikelService: ArtikelServices,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['artikelId'];

    this.artikelService.geefArtikel(this.id).subscribe((data: Artikel) => {
      this.artikel = data;
    });
  }

}
