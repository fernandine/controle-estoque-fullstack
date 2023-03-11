package com.control.inventory.dtos;

import com.control.inventory.entities.Produto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDto implements Serializable {


    private Long id;
    private String codigo;
    private String nome;
    private Long quantidadeMinima;
    private Long saldoInicial;

    public ProdutoDto(Produto entity) {
        id = entity.getId();
        codigo = entity.getCodigo();
        nome = entity.getNome();
        quantidadeMinima = entity.getQuantidadeMinima();
        saldoInicial = entity.getSaldoInicial();
    }

}
