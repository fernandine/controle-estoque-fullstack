import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    showSuccessMessage: boolean = false;

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit(): void {
      const { username, password } = this.form;
      this.authService.login(username, password).subscribe(
        data => {
          this.isLoggedIn = true;
          this.roles = this.authService.getRoles();
          this.showSuccessMessage = true; // adicione esta linha
          this.router.navigate(['/usuarios']);
        },
        err => {
          if (err && err.message) {
            console.error(err.message);
            this.errorMessage = err.message; // altere a linha que estava anteriormente
          } else {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        }
      );
    }

  }


