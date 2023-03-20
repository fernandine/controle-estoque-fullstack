import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { StorageService } from '../service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) { }

   canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

}
