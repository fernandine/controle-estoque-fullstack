import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private AuthService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.AuthService.getToken();

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + authToken)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
