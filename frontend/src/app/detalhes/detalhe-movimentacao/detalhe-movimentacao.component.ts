import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Movimentacao } from '../../common/movimentacao';
import { MovimentacaoService } from '../../service/movimentacao.service';

@Component({
  selector: 'app-detalhe-movimentacao',
  templateUrl: './detalhe-movimentacao.component.html'
})
export class DetalheMovimentacaoComponent {

  editandoData: boolean = false;
  editandoTipoMovimento: boolean = false;
  editandoDocumento: boolean = false;
  editandoQuantidade: boolean = false;
  editandoMotivo: boolean = false;
  editandoSaldo: boolean = false;
  editandoProduto: boolean = false;

  movimentacao!: Movimentacao;

  constructor(private activateRoute: ActivatedRoute,
    private movimentacaoService: MovimentacaoService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    const produtoId = this.activateRoute.snapshot.paramMap.get('produtoId');
    if (produtoId) {
      this.movimentacaoService.getMovimentacaoById(Number(produtoId)).subscribe(
        (movimentacao: Movimentacao) => {
          this.movimentacao = movimentacao;
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }

  editField(field: string) {
    switch(field) {
      case 'produto':
        this.editandoProduto = true;
        break;
      case 'data':
        this.editandoData = true;
        break;
      case 'tipoMovimento':
        this.editandoTipoMovimento = true;
        break;
      case 'documento':
        this.editandoDocumento = true;
        break;
        case 'quantidade':
        this.editandoQuantidade = true;
        break;
        case 'motivo':
        this.editandoMotivo = true;
        break;
        case 'saldo':
        this.editandoSaldo = true;
        break;
    }
  }

  cancelEdit(field: string) {
    switch(field) {
      case 'produto':
        this.editandoProduto = false;
        break;
      case 'data':
        this.editandoData = false;
        break;
      case 'tipoMovimento':
        this.editandoTipoMovimento = false;
        break;
      case 'documento':
        this.editandoDocumento = false;
        break;
        case 'quantidade':
        this.editandoQuantidade = false;
        break;
        case 'motivo':
        this.editandoMotivo = false;
        break;
        case 'saldo':
        this.editandoSaldo = false;
        break;
    }
  }


  salvar() {
    this.movimentacaoService.updateMovimentacao(this.movimentacao).subscribe(
      () => {
        // Caso a atualização seja bem sucedida, desabilita o modo edição
        this.editandoData = false;
        this.editandoDocumento = false;
        this.editandoMotivo = false;
        this.editandoProduto = false;
        this.editandoQuantidade = false;
        this.editandoSaldo = false;
        this.editandoTipoMovimento = false;
        // Redireciona para a lista de produtos
        this.router.navigate(['/movimentacoes']);
      },
      (erro) => {
        console.error(erro);
        // Tratar erro, exibir mensagem de erro para o usuário, etc.
      }
    );
  }

  voltar() {
    this.location.back();  }

}




