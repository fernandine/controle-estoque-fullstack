import { Produto } from './produto';
import { TipoMovimento } from './tipoMovimento';

export interface Movimentacao {
  id: number;
  produtoId: number;
  tipoMovimento: TipoMovimento;
  data: Date;
  documento: string;
  motivo: string;
  quantidade: number;
  saldo: number;
  situacao: string;
}
