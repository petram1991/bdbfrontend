import {Component} from '@angular/core';
import {AuthService} from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Belastingdienst Bazaar';
  ingelogdeGebruiksnaam$ = this.authServices.ingelogdeGebruiksnaam$;

  ingelogd = false;
  ingelogdeGebruiksnaam: string;

  constructor(private authServices: AuthService) {
    this.ingelogdeGebruiksnaam$.subscribe((g) => {
      this.ingelogd = true;
      this.ingelogdeGebruiksnaam = g;
    });
  }
}
