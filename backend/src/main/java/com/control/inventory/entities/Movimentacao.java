package com.control.inventory.entities;

import com.control.inventory.entities.enums.TipoMovimento;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
    private TipoMovimento tipoMovimento;
    private Integer quantidade;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date data;
    private String motivo;
    private String documento;

    private BigDecimal saldo;

    private String situacao;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;

}