import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/common/produto';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html'
})
export class FormProdutoComponent {

  displayDialog: boolean = false;
  formProduto!: FormGroup;
  produtos: Produto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.formProduto = this.formBuilder.group({
      codigo: [0, Validators.required],
      nome: ['', Validators.required],
      quantidadeMinima: [0, Validators.required],
      saldoInicial: [0, Validators.required]
    });
    this.carregarProdutos();
  }

  cancel() {
    this.formProduto.reset();
    this.displayDialog = false;
  }

  save() {
    const produto = this.formProduto.value;
    this.produtoService.createProduto(produto).subscribe(() => {
      this.formProduto.reset();
      this.displayDialog = false;
      // lógica para atualizar a lista de produtos na página
      this.carregarProdutos();
    });
  }

  carregarProdutos() {
    // Serviço de produtos para carregar a lista de produtos
    this.produtoService.getProduto().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
