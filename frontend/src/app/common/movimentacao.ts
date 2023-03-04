import { TipoMovimento } from './tipoMovimento';

export interface Movimentacao {
  id: any;
  produtoId: number;
  tipoMovimento: TipoMovimento;
  data: Date;
  documento: string;
  motivo: string;
  quantidade: number;
  saldo: number;
  situacao: string
}
