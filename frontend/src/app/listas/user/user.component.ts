import { Component } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

usuarios: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

excluirUsuario(usuario: User): void {
    const index = this.usuarios.findIndex(p => p === usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }
}
