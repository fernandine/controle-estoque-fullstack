import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "src/app/common/produto";
import { ProdutoService } from "src/app/service/produto.service";


@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  isLoggedIn = false;

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

  excluirProduto(id: number): void {
    this.produtoService.deleteProduto(id)
      .subscribe(() => {
        const index = this.produtos.findIndex(p => p.id === id);
        if (index !== -1) {
          this.produtos.splice(index, 1);
        }
      });
  }

}
