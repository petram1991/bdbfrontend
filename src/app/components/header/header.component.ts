import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ingelogd = false;
  gebruiksnaam?: string;
  constructor(private authServices: AuthService) {
  }
  signOut(): void {
    window.sessionStorage.clear();
  }
  uitloggen(): void{
    this.signOut();
    window.location.reload();
  }
}
