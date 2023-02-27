export interface Produto {

  id: number;
  codigo: string;
  nome: string;
  quantidadeMinima: number;
  saldoInicial: number;
  editando: boolean;
}
