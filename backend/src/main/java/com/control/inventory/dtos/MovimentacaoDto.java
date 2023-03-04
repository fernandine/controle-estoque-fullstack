package com.control.inventory.dtos;

import com.control.inventory.entities.Movimentacao;
import com.control.inventory.entities.enums.StatusMovimento;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Positive;
import java.io.Serializable;
import java.math.BigDecimal;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovimentacaoDto implements Serializable {

    @JsonIgnore

    private Long id;
    private StatusMovimento tipoMovimento;
    @Positive(message ="Preço deve ser positivo")
    private Integer quantidade;
    @PastOrPresent(message="A data não pode ser futura")
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date data;
    private String motivo;
    private String documento;

    private Long produtoId;

    @Positive(message ="Preço deve ser positivo")
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
