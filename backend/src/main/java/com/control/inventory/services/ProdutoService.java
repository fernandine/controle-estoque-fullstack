package com.control.inventory.services;

import com.control.inventory.dtos.ProdutoDto;
import com.control.inventory.entities.Produto;
import com.control.inventory.repositories.ProdutoRepository;
import com.control.inventory.services.exceptions.DatabaseException;
import com.control.inventory.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;


    @Transactional(readOnly = true)
    public List<ProdutoDto> findAll() {
        List<Produto> list = repository.findAll();
        return list.stream().map(ProdutoDto::new).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProdutoDto findById(Long id) {
        Optional<Produto> result = repository.findById(id);
        Produto entity = result.get();
        return new ProdutoDto(entity);
    }

    @Transactional
    public ProdutoDto insert(ProdutoDto dto) {
        Produto entity = new Produto();

        copyDtoToEntity(dto, entity);

        //if (entity.getSaldoInicial() > 0) {
       //     return new ProdutoDto(entity);
      //  }

        entity = repository.save(entity);
            return new ProdutoDto(entity);
    }

    @Transactional
    public ProdutoDto update(Long id, ProdutoDto dto) {
        try {
            Produto entity = repository.getReferenceById(id);
            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return new ProdutoDto(entity);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
        catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

    private void copyDtoToEntity(ProdutoDto dto, Produto entity) {
        entity.setCodigo(dto.getCodigo());
        entity.setNome(dto.getNome());
//        entity.setMovimentacao(dto.getMovimentacao());
        entity.setSaldoInicial(dto.getSaldoInicial());
        entity.setQuantidadeMinima(dto.getQuantidadeMinima());

    }
}

