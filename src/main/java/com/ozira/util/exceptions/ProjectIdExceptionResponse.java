package com.ozira.util.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectIdExceptionResponse {

    //== FIELDS ==
    private String projectIdentifier;

    //== CONSTRUCTORS ==
    public ProjectIdExceptionResponse(String projectIdentifier){

        this.projectIdentifier = projectIdentifier;
    }
}
