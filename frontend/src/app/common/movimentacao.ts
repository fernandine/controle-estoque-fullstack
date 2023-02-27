import { TipoMovimento } from './tipoMovimento';

export interface Movimentacao {
  produtoId: number;
  tipoMovimento: TipoMovimento;
  data: Date;
  documento: string;
  motivo: string;
  quantidade: number;
  saldo: number;
  situacao: string
}
