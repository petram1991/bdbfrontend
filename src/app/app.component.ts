import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bdbfrontend';
  ingelogd = false;
  gebruiksnaam?: string;
  constructor(private authServices: AuthService) {
  }

  ngOnInit(): void {
    if (this.ingelogd){
      const gebruiker = this.authServices.getGebruiker();
      this.gebruiksnaam = gebruiker.gebruiksnaam;
    }
  }
}
