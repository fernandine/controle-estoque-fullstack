import { Produto } from './produto';
import { TipoMovimento } from './tipoMovimento';

export class Movimentacao {
  id?: any;
  tipoMovimento!: TipoMovimento;
  data!: Date;
  documento!: string;
  motivo!: string;
  quantidade!: number;
  saldo!: number;
  situacao!: string;
  produto!: Produto;
}
