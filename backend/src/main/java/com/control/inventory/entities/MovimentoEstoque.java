package com.control.inventory.entities;

import com.control.inventory.entities.enums.StatusMovimento;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

import java.time.LocalDate;

@Entity
@Table(name="tb_estoque_movimento")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MovimentoEstoque implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "tipo_movimento")
    private StatusMovimento tipoMovimento;
    private Integer quantidade;
    private LocalDate data;
    private String motivo;
    private String documento;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;

}