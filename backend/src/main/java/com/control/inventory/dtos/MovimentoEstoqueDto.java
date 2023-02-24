package com.control.inventory.dtos;

import com.control.inventory.entities.MovimentoEstoque;
import com.control.inventory.entities.enums.StatusMovimento;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovimentoEstoqueDto implements Serializable {

    @JsonIgnore
    private Long id;
    private StatusMovimento tipoMovimento;
    private Integer quantidade;
    private LocalDate data;
    private String motivo;
    private String documento;

    private Long produtoId;

    public MovimentoEstoqueDto(MovimentoEstoque entity) {
        tipoMovimento = entity.getTipoMovimento();
        quantidade = entity.getQuantidade();
        data = entity.getData();
        motivo = entity.getMotivo();
        documento = entity.getDocumento();
        produtoId = entity.getProduto().getId();
    }
}
