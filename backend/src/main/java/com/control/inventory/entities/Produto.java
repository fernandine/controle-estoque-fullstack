package com.control.inventory.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name="tb_produto")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Produto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String codigo;
    private String nome;
    @JoinColumn(name = "quantidade_minima")
    private Long quantidadeMinima;
    @JoinColumn(name = "saldo_inicial")
    private Long saldoInicial;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "produto")
    private List<Movimentacao> movimentacoes;

}
