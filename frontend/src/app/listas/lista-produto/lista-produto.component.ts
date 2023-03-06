import { ProdutoService } from './../../service/produto.service';
import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Produto } from 'src/app/common/produto';
import { DetalheProdutoComponent } from '../../detalhe-produto/detalhe-produto.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {

  @ViewChild(DetalheProdutoComponent) appDetalhe!: DetalheProdutoComponent ;

  produtos: Produto[] = [];

  produto!: Produto;
  exibirDetalhes: boolean = false;

  constructor(
    private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProduto().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  mostrarDetalhes(produto: Produto) {
    this.appDetalhe.produto = produto;
    this.exibirDetalhes = true;
  }

excluirProduto(produto: Produto): void {
    const index = this.produtos.findIndex(p => p === produto);
    if (index !== -1) {
      this.produtos.splice(index, 1);
    }
  }
}
