package com.control.inventory.services;

import com.control.inventory.dtos.MovimentacaoDto;
import com.control.inventory.entities.Movimentacao;
import com.control.inventory.entities.Produto;
import com.control.inventory.entities.enums.TipoMovimento;
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
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovimentacaoService {

    @Autowired
    private MovimentoEstoqueRepository repository;


    @Transactional(readOnly = true)
    public List<MovimentacaoDto> findAll() {
        List<Movimentacao> list = repository.findAll();
        return list.stream().map(MovimentacaoDto::new).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Page<MovimentacaoDto> findByTipoMovimento(TipoMovimento tipoMovimento, Pageable pageable) {
        Page<Movimentacao> page = repository.findByTipoMovimento(tipoMovimento, pageable);
        return page.map(MovimentacaoDto::new);
    }

    @Transactional(readOnly = true)
    public MovimentacaoDto findById(Long id) {
            Optional<Movimentacao> obj = repository.findById(id);
        Movimentacao entity = obj.orElseThrow(()-> new ResourceNotFoundException("Entity not found"));
            return new MovimentacaoDto(entity);
    }

    @Transactional
    public MovimentacaoDto insert(MovimentacaoDto dto) {
        Movimentacao entity = new Movimentacao();

        copyDtoToEntity(dto, entity);

        Produto produto = new Produto();
        produto.setId(dto.getProdutoId());
        entity.setProduto(produto);

        entity = repository.save(entity);
        return new MovimentacaoDto(entity);
    }

    @Transactional
    public MovimentacaoDto update(Long id, MovimentacaoDto dto) {
        try {
            Movimentacao entity = repository.getReferenceById(id);
            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return new MovimentacaoDto(entity);
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

    private void copyDtoToEntity(MovimentacaoDto dto, Movimentacao entity) {

        entity.setData(dto.getData());
        entity.setDocumento(dto.getDocumento());
        entity.setMotivo(dto.getMotivo());
        entity.setQuantidade(dto.getQuantidade());
        entity.setTipoMovimento(dto.getTipoMovimento() );
        entity.setSaldo(dto.getSaldo());
        entity.setSituacao(dto.getSituacao());

    }

}
