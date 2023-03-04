import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movimentacao } from 'src/app/common/movimentacao';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';
import { DetalheMovimentacaoComponent } from '../detalhe-movimentacao/detalhe-movimentacao.component';

@Component({
  selector: 'app-lista-movimentacao',
  templateUrl: './lista-movimentacao.component.html',
})
export class ListaMovimentacaoComponent implements OnInit {

  @ViewChild(DetalheMovimentacaoComponent) appDetalhe!: DetalheMovimentacaoComponent ;

  exibirDetalhes: boolean = false;
  movimentacoes: Movimentacao[] = [];
  movimentacao!: Movimentacao;

  constructor(private movimentacaoService: MovimentacaoService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovimentacoes();
    const id = this.route.snapshot.paramMap.get('id');
  }

  getMovimentacoes(): void {
    this.movimentacaoService.getMovimentacoes().subscribe((movimentacoes) => {
      this.movimentacoes = movimentacoes;
    });
  }

  mostrarDetalhes(movimentacao: Movimentacao) {
    this.appDetalhe.movimentacao = movimentacao;
    this.exibirDetalhes = true;
  }

excluirProduto(movimentacao: Movimentacao): void {
    const index = this.movimentacoes.findIndex(p => p === movimentacao);
    if (index !== -1) {
      this.movimentacoes.splice(index, 1);
    }
  }

}