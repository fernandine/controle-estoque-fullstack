package com.control.inventory.dtos;

import com.control.inventory.entities.Produto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDto implements Serializable {


    private Long id;
    private String codigo;
    private String nome;
    private Long quantidadeMinima;
    private Double saldoInicial;

    public ProdutoDto(Produto entity) {
        id = entity.getId();
        codigo = entity.getCodigo();
        nome = entity.getNome();
        quantidadeMinima = entity.getQuantidadeMinima();
        saldoInicial = entity.getSaldoInicial();

    }
}
