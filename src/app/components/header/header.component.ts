import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

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
  signOut(): void {
    window.sessionStorage.clear();
  }
  uitloggen(): void{
    this.signOut();
    window.location.reload();
  }
}
