import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/common/produto';
import { EstoqueService } from 'src/app/service/estoque.service';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss']
})
export class FormProdutoComponent {
  form = this.formBuilder.group({
    id: [''],
    EAN: ['', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]],
    nome: ['', [Validators.required]],
    quantidadeMinima: ['', [Validators.required]],
    saldoInicial: ['', [Validators.required]],

  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: EstoqueService,
    private location: Location,
    private route: ActivatedRoute) {
    //this.form
  }

  ngOnInit(): void {
    const produto: Produto = this.route.snapshot.data['produto'];
    this.form.setValue({
      id: produto.id,
      EAN: produto.EAN,
      nome: produto.nome,
      quantidadeMinima: produto.quantidadeMinima,
      saldoInicial: produto.saldoInicial,

    });
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }



  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }
}
