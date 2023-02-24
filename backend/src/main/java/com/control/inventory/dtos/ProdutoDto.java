package com.control.inventory.dtos;

import com.control.inventory.entities.MovimentoEstoque;
import com.control.inventory.entities.Produto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDto implements Serializable {

    private Long id;
    private String EAN;
    private String nome;
    private Long quantidadeMinima;
    private Double saldoInicial;
//    private List<MovimentoEstoqueDto> movimentacoes = new ArrayList<>();

    public ProdutoDto(Produto entity) {
        id = entity.getId();
        EAN = entity.getEAN();
        nome = entity.getNome();
        quantidadeMinima = entity.getQuantidadeMinima();
        saldoInicial = entity.getSaldoInicial();
    }
}
