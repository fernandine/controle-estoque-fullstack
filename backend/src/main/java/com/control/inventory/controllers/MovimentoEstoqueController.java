package com.control.inventory.controllers;

import com.control.inventory.dtos.MovimentoEstoqueDto;
import com.control.inventory.entities.MovimentoEstoque;
import com.control.inventory.entities.enums.StatusMovimento;
import com.control.inventory.services.MovimentoEstoqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/movimentacoes")
//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
public class MovimentoEstoqueController {

    @Autowired
    private MovimentoEstoqueService service;

    @GetMapping
    public ResponseEntity<List<MovimentoEstoqueDto>> findAll() {
        List<MovimentoEstoqueDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/filtrar")
    public ResponseEntity<Page<MovimentoEstoqueDto>> findByTipoMovimento(
            @RequestParam(value = "tipo") StatusMovimento tipoMovimento,
            Pageable pageable) {

        Page<MovimentoEstoqueDto> page = service.findByTipoMovimento(tipoMovimento, pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovimentoEstoqueDto> findById(@PathVariable Long id) {
        MovimentoEstoqueDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }


    @PostMapping
    //@PreAuthorize("hasRole('ROLE_GERENTE')")
    public ResponseEntity<MovimentoEstoqueDto> insert(@RequestBody MovimentoEstoqueDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    //@PreAuthorize("hasRole('ROLE_GERENTE')")
    public ResponseEntity<MovimentoEstoqueDto> update(@PathVariable Long id, @RequestBody MovimentoEstoqueDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
