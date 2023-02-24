package com.control.inventory.services;

import com.control.inventory.dtos.MovimentoEstoqueDto;
import com.control.inventory.entities.MovimentoEstoque;
import com.control.inventory.entities.Produto;
import com.control.inventory.entities.enums.StatusMovimento;
import com.control.inventory.repositories.MovimentoEstoqueRepository;
import com.control.inventory.services.exceptions.DatabaseException;
import com.control.inventory.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovimentoEstoqueService {

    @Autowired
    private MovimentoEstoqueRepository repository;


    @Transactional(readOnly = true)
    public List<MovimentoEstoqueDto> findAll() {
        List<MovimentoEstoque> list = repository.findAll();
        return list.stream().map(MovimentoEstoqueDto::new).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Page<MovimentoEstoqueDto> findByTipoMovimento(StatusMovimento tipoMovimento, Pageable pageable) {
        Page<MovimentoEstoque> page = repository.findByTipoMovimento(tipoMovimento, pageable);
        return page.map(MovimentoEstoqueDto::new);
    }

    @Transactional(readOnly = true)
    public MovimentoEstoqueDto findById(Long id) {
            Optional<MovimentoEstoque> obj = repository.findById(id);
        MovimentoEstoque entity = obj.orElseThrow(()-> new ResourceNotFoundException("Entity not found"));
            return new MovimentoEstoqueDto(entity);
    }

    @Transactional
    public MovimentoEstoqueDto insert(MovimentoEstoqueDto dto) {
        MovimentoEstoque entity = new MovimentoEstoque();

        copyDtoToEntity(dto, entity);

        Produto produto = new Produto();
        produto.setId(dto.getProdutoId());
        entity.setProduto(produto);

        entity = repository.save(entity);
        return new MovimentoEstoqueDto(entity);
    }

    @Transactional
    public MovimentoEstoqueDto update(Long id, MovimentoEstoqueDto dto) {
        try {
            MovimentoEstoque entity = repository.getReferenceById(id);
            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return new MovimentoEstoqueDto(entity);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

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

    private void copyDtoToEntity(MovimentoEstoqueDto dto, MovimentoEstoque entity) {

        entity.setData(dto.getData());
        entity.setDocumento(dto.getDocumento());
        entity.setMotivo(dto.getMotivo());
        entity.setQuantidade(dto.getQuantidade());
        entity.setTipoMovimento(dto.getTipoMovimento() );

    }

}
