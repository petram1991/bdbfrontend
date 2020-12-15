import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import {ActivatedRoute, Router} from '@angular/router';
import {Gebruiker} from '../../modals/gebruiker';

@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent {
  gebruiker = {} as Gebruiker;
  message$ = this.authService.message$;

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  login(): void {

    const { gebruiksnaam, wachtwoord } = this.form;
    this.authService.inloggen(gebruiksnaam, wachtwoord);
    this.gebruiker = {} as Gebruiker;
  }
  // onSubmit(): void {
  //
  //
  //   this.authService.inloggen(gebruiksnaam, wachtwoord).subscribe(
  //     () => {
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.router.navigate(['/'], {relativeTo: this.route});
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }
}
