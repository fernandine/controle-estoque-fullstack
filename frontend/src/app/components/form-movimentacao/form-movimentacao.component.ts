import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstoqueService } from 'src/app/service/estoque.service';
import { Estoque } from '../../common/estoque';
import { Produto } from '../../common/produto';

@Component({
  selector: 'app-form-movimentacao',
  templateUrl: './form-movimentacao.component.html'
})
export class FormMovimentacaoComponent {

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
    const estoque: Estoque = this.route.snapshot.data['estoque'];
    this.form.setValue({
      id: estoque.id,
      EAN: estoque.EAN,
      nome: estoque.nome,
      quantidadeMinima: estoque.quantidadeMinima,
      saldoInicial: estoque.saldoInicial,

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
