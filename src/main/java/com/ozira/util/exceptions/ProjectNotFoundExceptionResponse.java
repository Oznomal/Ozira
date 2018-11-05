package com.ozira.util.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectNotFoundExceptionResponse {

    //== FIELDS ==
    private String projectNotFound;

    //== CONSTRUCTORS ==
    public ProjectNotFoundExceptionResponse(String projectNotFound){
        this.projectNotFound = projectNotFound;
    }
}
