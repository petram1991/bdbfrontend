import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent {

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


  onSubmit(): void {
    const { gebruiksnaam, wachtwoord } = this.form;

    this.authService.inloggen(gebruiksnaam, wachtwoord).subscribe(
      () => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate([''], {relativeTo: this.route});
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
