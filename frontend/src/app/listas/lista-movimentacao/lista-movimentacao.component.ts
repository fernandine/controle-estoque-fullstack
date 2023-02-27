import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movimentacao } from 'src/app/common/movimentacao';
import { Produto } from 'src/app/common/produto';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';
import { NotificacaoService } from '../../service/notificacao.service';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-lista-movimentacao',
  templateUrl: './lista-movimentacao.component.html',
  styleUrls: ['./lista-movimentacao.component.scss']
})
export class ListaMovimentacaoComponent implements OnInit {

  produto$: Observable<Produto[]> | null = null;
  movimentacao$: Observable<Movimentacao[]> | null = null;

  movimentacoes: Movimentacao[] = [];
  visibleProduto: boolean = false;

  @Output() mostrarDetalhesProduto = new EventEmitter(false);

  constructor(private movimentacaoService: MovimentacaoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }


  ngOnInit(): void {
    this.getMovimentacoes();
  }

  getMovimentacoes(): void {
    this.movimentacaoService.getMovimentacoes()
      .subscribe(movimentacoes => this.movimentacoes = movimentacoes);
  }

  onEdit(produto: Produto) {
    this.router.navigate(['edit', produto.id], { relativeTo: this.activatedRoute });
  }

/*
  updateMovimentacao(movimentacao: Movimentacao): void {
    this.movimentacaoService.updateMovimentacao(movimentacao)
      .subscribe();
  }

  deleteMovimentacao(movimentacao: Movimentacao): void {
    this.movimentacoes = this.movimentacoes.filter(m => m !== movimentacao);
    this.movimentacaoService.deleteMovimentacao(movimentacao)
      .subscribe();
  }*/

  }

