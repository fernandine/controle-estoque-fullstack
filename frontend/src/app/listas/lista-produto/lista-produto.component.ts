import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/common/produto';
import { ProdutoService } from '../../service/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {
  @Input() productDetails: Produto[] = [];
  @Output() edit = new EventEmitter(false);

  produto!: Produto;

  constructor(private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onEdit(produto: Produto) {
    this.edit.emit(produto);
  }

}
