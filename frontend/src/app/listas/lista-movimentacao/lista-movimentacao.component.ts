import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TipoMovimento } from "src/app/common/tipoMovimento";
import { AuthService } from "src/app/service/auth.service";
import { Movimentacao } from "../../common/movimentacao";
import { MovimentacaoService } from "../../service/movimentacao.service";


@Component({
  selector: 'app-lista-movimentacao',
  templateUrl: './lista-movimentacao.component.html',
})
export class ListaMovimentacaoComponent implements OnInit {

  movimentacoes: Movimentacao[] = [];

  tiposMovimento = [
    {label: 'Selecione', value: null},
    { label: TipoMovimento.ENTRADA, value: TipoMovimento.ENTRADA },
    { label: TipoMovimento.SAIDA, value: TipoMovimento.SAIDA },
    { label: TipoMovimento.SALDO_INICIAL, value: TipoMovimento.SALDO_INICIAL },
    { label: TipoMovimento.AJUSTE_ENTRADA, value: TipoMovimento.AJUSTE_ENTRADA },
    { label: TipoMovimento.AJUSTE_SAIDA, value: TipoMovimento.AJUSTE_SAIDA }
  ];

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

}
