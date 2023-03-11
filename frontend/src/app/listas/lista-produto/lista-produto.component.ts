import { ProdutoService } from './../../service/produto.service';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Produto } from 'src/app/common/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  verDetalhes(id: number) {
    this.router.navigate(['/produtos', id]);
  }

excluirProduto(produto: Produto): void {
    const index = this.produtos.findIndex(p => p === produto);
    if (index !== -1) {
      this.produtos.splice(index, 1);
    }
  }
}
