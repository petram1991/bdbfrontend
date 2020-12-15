import { Component, OnInit } from '@angular/core';
import {ArtikelServices} from '../../services/artikel.services';

@Component({
  selector: 'app-alle-artikelen',
  templateUrl: './alle-artikelen.component.html',
  styleUrls: ['./alle-artikelen.component.css']
})
export class AlleArtikelenComponent implements OnInit {

  artikels = this.artikelService.geefAlles();

  constructor(private artikelService: ArtikelServices) { }

  ngOnInit(): void {
  }

}
