import { Movimentacao } from './../../common/movimentacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';
import { TipoMovimento } from '../../common/tipoMovimento';
import { Produto } from '../../common/produto';
import { ProdutoService } from '../../service/produto.service';


@Component({
  selector: 'app-form-movimentacao',
  templateUrl: './form-movimentacao.component.html'
})
export class FormMovimentacaoComponent implements OnInit {

  movimentacoes: Movimentacao[] = [];
  formMovimentacao!: FormGroup;
  displayDialog: boolean = false;
  selectedProdutoControl = new FormControl(null, Validators.required);
  listaProduto: Produto[] = [];
  selectedProduto: any;

  tipoMovimento = [
    {label: 'Selecione', value: null},
    { label: TipoMovimento.ENTRADA, value: TipoMovimento.ENTRADA },
    { label: TipoMovimento.SAIDA, value: TipoMovimento.SAIDA },
    { label: TipoMovimento.SALDO_INICIAL, value: TipoMovimento.SALDO_INICIAL },
    { label: TipoMovimento.AJUSTE_ENTRADA, value: TipoMovimento.AJUSTE_ENTRADA },
    { label: TipoMovimento.AJUSTE_SAIDA, value: TipoMovimento.AJUSTE_SAIDA }
  ];

  constructor(
    private fb: FormBuilder,
    private service: MovimentacaoService,
    private produtoService: ProdutoService
    ) { }

  ngOnInit(): void {
    this.formMovimentacao = this.fb.group({
      listaProduto: this.selectedProdutoControl,
      tipoMovimento: ['', Validators.required],
      quantidade: [0, Validators.required],
      data: ['', Validators.required],
      motivo: ['', Validators.required],
      documento: [''],
      saldo: [0, Validators.required],
      situacao: ['', Validators.required]
    });
this.getMovimentacoes();
this.getProdutos();
}

getProdutos(): void {
  this.produtoService.getProduto().subscribe((produtos) => {
    this.listaProduto = produtos;
  });
}

  getMovimentacoes(): void {
    this.service.getMovimentacoes().subscribe(
      (movimentacoes) => {
          this.movimentacoes = movimentacoes;
       });
  }

  insertMovimentacao(): void {
    const movimentacao = this.formMovimentacao.value;
    movimentacao.produto = this.selectedProduto;
    this.service.createMovimentacao(movimentacao).subscribe(() => {
      this.formMovimentacao.reset();
      this.selectedProduto = null;
      this.displayDialog = false;
      this.getMovimentacoes();
    });
  }

  cancel() {
    this.formMovimentacao.reset();
    this.selectedProduto = null;
    this.displayDialog = false;
  }

  showDocumento = false;
    onTipoMovimentoChange() {
    const tipoMovimento = this.formMovimentacao.controls['tipoMovimento'].value;
    this.showDocumento = tipoMovimento === 'ENTRADA' || tipoMovimento === 'SAIDA';
  }
}
