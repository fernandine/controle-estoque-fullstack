import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Estoque } from 'src/app/common/estoque';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formularioMovimentacao: boolean = false;

  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  constructor(private router: Router) {}

  launchDialog() {
    this.router.navigate(['/form-movimentacao']);
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(estoque: Estoque) {
    this.edit.emit(estoque);
  }

  onDelete(estoque: Estoque) {
    this.remove.emit(estoque);
  }
}
