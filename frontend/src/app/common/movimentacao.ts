import { Produto } from './produto';
import { TipoMovimento } from './tipoMovimento';

export class Movimentacao {
  id?: any;
  tipoMovimento?: TipoMovimento;
  data?: Date;
  documento?: string;
  motivo?: string;
  quantidade?: number;
  saldo?: number;
  situacao?: string;
  produto?: Produto;

  constructor(
    id?: any,
    tipoMovimento?: TipoMovimento,
    data?: Date,
    documento?: '',
    motivo?: '',
    quantidade?: 0,
    saldo?: 0,
    situacao?: '',
    produto?: Produto
  ) {
    this.id = id;
    this.tipoMovimento = tipoMovimento;
    this.data = data;
    this.documento = documento;
    this.motivo = motivo;
    this.saldo = saldo;
    this.situacao = situacao;
    this.produto = produto;
  }
}
