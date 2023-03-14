package com.control.inventory.dtos;

import com.control.inventory.services.validation.UserInsertValid;

@UserInsertValid
public class UserInsertDto extends UserDto {
	private String user;

	private String password;

	UserInsertDto() {
		super();
	}

	public String getUser() {
		return user;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
}
