import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ingelogdeGebruiksnaam$ = this.authServices.ingelogdeGebruiksnaam$;

  ingelogd = false;
  ingelogdeGebruiksnaam: string;
  constructor(private authServices: AuthService) {
    this.ingelogdeGebruiksnaam$.subscribe((g) => {
      this.ingelogd = true;
      this.ingelogdeGebruiksnaam = g;
    });
  }
  signOut(): void {
    window.sessionStorage.clear();
  }
  uitloggen(): void{
    this.signOut();
    window.location.reload();
  }
  isIngelogd(): boolean {
    return this.ingelogd;
  }
}
