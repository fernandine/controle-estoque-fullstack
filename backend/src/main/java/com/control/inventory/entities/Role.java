package com.control.inventory.entities;

import com.control.inventory.entities.enums.StatusRole;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private StatusRole name;

	public Role() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public StatusRole getName() {
		return name;
	}

	public void setName(StatusRole name) {
		this.name = name;
	}
}