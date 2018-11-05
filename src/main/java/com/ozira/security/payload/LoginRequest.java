package com.ozira.security.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class LoginRequest {

    //== FIELDS ==
    @NotBlank(message = "Username cannot be blank")
    private String username; // Must match User entity field name
    @NotBlank(message = "Password cannot be blank")
    private String password; // Must match User entity field name
}
