import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.component.html',
  styleUrls: ['./registreer.component.css']
})
export class RegistreerComponent {

  form: any = {
    gebruiksnaam: null,
    email: null,
    wachtwoord: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  onSubmit(): void {
    const {gebruiksnaam, email, wachtwoord} = this.form;

    this.authService.registreer(gebruiksnaam, email, wachtwoord).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        setTimeout(() => {
          this.router.navigate(['/inloggen']);
        }, 2000);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
