package com.control.inventory.repositories;

import com.control.inventory.entities.Role;
import com.control.inventory.entities.enums.StatusRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
