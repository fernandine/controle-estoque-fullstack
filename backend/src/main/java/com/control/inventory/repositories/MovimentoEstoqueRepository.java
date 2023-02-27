package com.control.inventory.repositories;

import com.control.inventory.entities.Movimentacao;
import com.control.inventory.entities.enums.StatusMovimento;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovimentoEstoqueRepository extends JpaRepository<Movimentacao, Long> {

    Page<Movimentacao> findByTipoMovimento(StatusMovimento tipoMovimento, Pageable pageable);

}


