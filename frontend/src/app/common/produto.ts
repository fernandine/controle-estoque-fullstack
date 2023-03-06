import { ThisReceiver } from "@angular/compiler";

export class Produto {
  id?: any;
  nome?: string;
  codigo?: string;
  quantidadeMinima?: number;
  saldoInicial?: number;

constructor(
  nome: string = '',
  codigo: string = '',
  quantidadeMinima: number = 0,
  id?: any
) {
  this.id = id;
  this.nome = nome;
  this.codigo = codigo;
  this.quantidadeMinima = quantidadeMinima;
  this.saldoInicial = this.saldoInicial;
  }
}
