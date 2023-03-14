import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/common/user";
import { UsuarioService } from "src/app/service/usuario.service";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  usuarios: User[] = [];

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
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
