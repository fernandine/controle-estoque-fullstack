/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { StorageService } from '../service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      const authority = this.storageService.getAuthority();
      if (authority === 'Administrador') {
        this.router.navigate(['/usuarios']);
      } else if (authority === 'Operador') {
        alert('Operador não tem permissão para acesso.');
        return false;
      } else {
        // Se a autoridade do usuário não é "Administrador" nem "Operador", redirecione-o para a página de login.
        this.router.navigate(['/auth/login']);
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }


}
*/
