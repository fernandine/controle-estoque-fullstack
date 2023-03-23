import { Component, OnInit, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';
import { NotificacaoService } from 'src/app/service/notificacao.service';

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
    private notificacaoService: NotificacaoService,
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
          if (success) {
            window.location.reload();
            this.router.navigate(['/users']);
            this.notificacaoService.success('Logged in successfully');
          } else {
            this.notificacaoService.error('Invalid username or password');
          }
        });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please fill all fields' });
    }
  }
}
