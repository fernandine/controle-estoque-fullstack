package com.control.inventory.entities;

import com.control.inventory.entities.enums.StatusMovimento;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="tb_estoque_movimento")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Movimentacao implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "tipo_movimento")
    private StatusMovimento tipoMovimento;
    private Integer quantidade;
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date data;
    private String motivo;
    private String documento;

    private BigDecimal saldo;

    private String situacao;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;

}