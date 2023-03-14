import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Movimentacao } from "../../common/movimentacao";
import { MovimentacaoService } from "../../service/movimentacao.service";


@Component({
  selector: 'app-lista-movimentacao',
  templateUrl: './lista-movimentacao.component.html',
})
export class ListaMovimentacaoComponent implements OnInit {

  movimentacoes: Movimentacao[] = [];

  constructor(private movimentacaoService: MovimentacaoService,
    private router: Router) {}

  ngOnInit(): void {
    this.movimentacaoService.getMovimentacoes().subscribe((movimentacoes) => {
      this.movimentacoes = movimentacoes;
    });
  }

  verDetalhes(produtoId: number) {
    this.router.navigate(['/movimentacoes', produtoId]);
  }

excluirMovimentacao(movimentacao: Movimentacao): void {
    const index = this.movimentacoes.findIndex(p => p === movimentacao);
    if (index !== -1) {
      this.movimentacoes.splice(index, 1);
    }
  }
}
