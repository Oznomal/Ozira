package com.ozira.util.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIdException extends RuntimeException{

    //== CONSTRUCTORS ==
    public ProjectIdException(String message) {
        super(message);
    }
}
