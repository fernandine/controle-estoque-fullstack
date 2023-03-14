import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';
import { Role } from '../../common/role';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loginForm!: FormGroup;
  submitted = false;
  showSuccessMessage: boolean = false;
  roles: Role[] = [];

  constructor
  (private authService: AuthService,
    private messageService: MessageService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        success => {
          this.isLoggedIn = true;
          if (success) {
            this.roles = this.authService.getRoles();
            this.showSuccessMessage = true;
            this.router.navigate(['/usuarios']);
          } else {
            this.messageService.add({severity:'error', summary:'Login failed', detail:'Invalid username or password'});
          }
        },
        error => {
          this.messageService.add({severity:'error', summary:'Login failed', detail:'An error occurred while trying to log in'});
        }
      );
    }
  }
}
