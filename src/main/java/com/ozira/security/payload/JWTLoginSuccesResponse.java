package com.ozira.security.payload;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * If the user login request is successful then we will send back a JWT Token to React
 * that will then be passed back to the API for future requests, this class handles
 * that response.
 *
 */
@Getter
@Setter
@ToString
public class JWTLoginSuccesResponse {

    //== FIELDS ==
    private boolean success;
    private String token;

    //== CONSTRUCTORS ==
    public JWTLoginSuccesResponse(boolean success, String token) {
        this.success = success;
        this.token = token;
    }
}
