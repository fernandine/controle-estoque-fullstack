import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../common/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html'
})
export class DetalheProdutoComponent implements OnInit {

  editandoNome: boolean = false;
  editandoCodigo: boolean = false;
  editandoQuantidade: boolean = false;
  produto!: Produto;
  private produtoOriginal!: Produto;

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
    ) { }

    ngOnInit(): void {
      const id = this.activateRoute.snapshot.paramMap.get('id');
      if (id) {
        this.produtoService.getProdutoById(Number(id)).subscribe(
          (produto: Produto) => {
            this.produto = produto;
          },
          (error) => {
            console.log(error);
          }
        );
      }

      this.produto = {...this.produtoOriginal};
    }

  editField(field: string) {
    switch(field) {
      case 'nome':
        this.editandoNome = true;
        break;
      case 'codigo':
        this.editandoCodigo = true;
        break;
      case 'quantidadeMinima':
        this.editandoQuantidade = true;
        break;
    }
  }

  cancelEdit(field: string) {
    switch(field) {
      case 'nome':
        this.editandoNome = false;
        break;
      case 'codigo':
        this.editandoCodigo = false;
        break;
      case 'quantidadeMinima':
        this.editandoQuantidade = false;
        break;
    }
  }

  salvar() {
    this.produtoService.updateProduto(this.produto).subscribe(
      () => {
        // Caso a atualização seja bem sucedida, desabilita o modo edição
        this.editandoNome = false;
        this.editandoCodigo = false;
        this.editandoQuantidade = false;
        // Redireciona para a lista de produtos
        this.router.navigate(['/produtos']);
      },
      (erro) => {
        console.error(erro);
        // Tratar erro, exibir mensagem de erro para o usuário, etc.
      }
    );
  }


  voltar() {
    this.router.navigate(['/produtos']);
  }


  }
