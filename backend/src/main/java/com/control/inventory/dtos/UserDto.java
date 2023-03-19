package com.control.inventory.dtos;

import com.control.inventory.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private Long id;

    private String username;

    private String email;

    private String password;

    public UserDto(User entity) {
        id = entity.getId();
        username = entity.getUsername();
        email = entity.getEmail();
        password = entity.getPassword();
    }

}
