import { Component, OnInit, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @ViewChild('loginDialog') loginDialog!: Dialog;

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(success => {
          window.location.reload();
          if (success) {
            this.router.navigate(['/users']);
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid username or password' });
          }
        });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please fill all fields' });
    }
  }
}
