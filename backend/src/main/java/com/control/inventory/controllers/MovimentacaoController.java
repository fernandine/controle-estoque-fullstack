package com.control.inventory.controllers;

import com.control.inventory.dtos.MovimentacaoDto;
import com.control.inventory.entities.enums.TipoMovimento;
import com.control.inventory.repositories.MovimentoEstoqueRepository;
import com.control.inventory.repositories.ProdutoRepository;
import com.control.inventory.services.MovimentacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/movimentacoes")
public class MovimentacaoController {

    @Autowired
    private MovimentacaoService service;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private MovimentoEstoqueRepository repository;

    @GetMapping
    public ResponseEntity<List<MovimentacaoDto>> findAll() {
        List<MovimentacaoDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovimentacaoDto> findById(@PathVariable Long id) {
        MovimentacaoDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    //@PreAuthorize("hasRole('ROLE_OPERATOR')")
    public ResponseEntity<MovimentacaoDto> insert(@Valid @RequestBody MovimentacaoDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    //@PreAuthorize("hasRole('ROLE_MODERATOR')")
    public ResponseEntity<MovimentacaoDto> update(@PathVariable Long id, @Valid @RequestBody MovimentacaoDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
