package com.ozira.util.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UsernameExistsException extends RuntimeException{

    //== CONSTRUCTORS ==
    public UsernameExistsException(String message) {
        super(message);
    }
}
