import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bdbfrontend';
  ingelogd = false;
  gebruiksnaam?: string;
  constructor(private authServices: AuthService) {
  }
}
