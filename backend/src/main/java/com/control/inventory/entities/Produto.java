package com.control.inventory.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
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
    private Double saldoInicial;

    @OneToMany(mappedBy = "produto")
    private List<Movimentacao> movimentacoes;

}
