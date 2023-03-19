package com.control.inventory.controllers;

import com.control.inventory.dtos.UserDto;
import com.control.inventory.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value= "/users")
@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<UserDto>> findAll() {
        List<UserDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserDto> findById(@PathVariable Long id) {
        UserDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }
}
