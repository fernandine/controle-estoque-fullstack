package com.control.inventory.controllers;

import com.control.inventory.dtos.MovimentacaoDto;
import com.control.inventory.entities.enums.StatusMovimento;
import com.control.inventory.services.MovimentacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/movimentacoes")
@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
public class MovimentacaoController {

    @Autowired
    private MovimentacaoService service;

    @GetMapping
    public ResponseEntity<List<MovimentacaoDto>> findAll() {
        List<MovimentacaoDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/filtrar")
    public ResponseEntity<Page<MovimentacaoDto>> findByTipoMovimento(
            @RequestParam(value = "tipo") StatusMovimento tipoMovimento,
            Pageable pageable) {

        Page<MovimentacaoDto> page = service.findByTipoMovimento(tipoMovimento, pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovimentacaoDto> findById(@PathVariable Long id) {
        MovimentacaoDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }


    @PostMapping
    //@PreAuthorize("hasRole('ROLE_GERENTE')")
    public ResponseEntity<MovimentacaoDto> insert(@RequestBody MovimentacaoDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    //@PreAuthorize("hasRole('ROLE_GERENTE')")
    public ResponseEntity<MovimentacaoDto> update(@PathVariable Long id, @RequestBody MovimentacaoDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
