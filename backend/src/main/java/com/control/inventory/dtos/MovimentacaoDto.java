package com.control.inventory.dtos;

import com.control.inventory.entities.Movimentacao;
import com.control.inventory.entities.enums.StatusMovimento;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.PastOrPresent;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovimentacaoDto implements Serializable {

    @JsonIgnore
    private Long id;
    private StatusMovimento tipoMovimento;
    private Integer quantidade;
    @PastOrPresent(message="A data não pode ser futura")
    private LocalDate data;
    private String motivo;
    private String documento;

    private Long produtoId;

    private BigDecimal saldo;

    private String situacao;


    public MovimentacaoDto(Movimentacao entity) {
        tipoMovimento = entity.getTipoMovimento();
        quantidade = entity.getQuantidade();
        data = entity.getData();
        motivo = entity.getMotivo();
        documento = entity.getDocumento();
        produtoId = entity.getProduto().getId();
        saldo = entity.getSaldo();
        situacao = entity.getSituacao();
    }
}
