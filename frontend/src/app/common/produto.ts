export class Produto {
  id?: any;
  nome?: string;
  codigo?: string;
  quantidadeMinima?: number;
  saldoInicial?: number;

constructor(
  id?: any,
  nome: string = '',
  codigo: string = '',
  quantidadeMinima: number = 0,

) {
  this.id = id;
  this.nome = nome;
  this.codigo = codigo;
  this.quantidadeMinima = quantidadeMinima;
  this.saldoInicial = this.saldoInicial;
  }
}
