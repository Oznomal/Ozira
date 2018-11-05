package com.ozira.util.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsernameExistsExceptionResponse {

    //== FIELDS ==
    private String username;

    //== CONSTRUCTORS ==
    public UsernameExistsExceptionResponse(String username) {
        this.username = username;
    }
}
