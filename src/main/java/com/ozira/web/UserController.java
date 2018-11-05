package com.ozira.web;

import com.ozira.domain.User;
import com.ozira.security.JwtTokenProvider;
import com.ozira.security.payload.JWTLoginSuccesResponse;
import com.ozira.security.payload.LoginRequest;
import com.ozira.service.MapValidationErrorService;
import com.ozira.service.UserService;
import com.ozira.util.constants.SecurityConstants;
import com.ozira.util.constants.mappings.Mappings;
import com.ozira.util.validator.UserValidator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping(Mappings.USER_API)
@Slf4j
public class UserController {

    //== FIELDS ==
    private final MapValidationErrorService mapValidationErrorService;
    private final UserService userService;
    private final UserValidator userValidator;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    //== CONSTRUCTORS ==
    @Autowired
    public UserController(MapValidationErrorService mapValidationErrorService,
                          UserService userService,
                          UserValidator userValidator,
                          JwtTokenProvider jwtTokenProvider,
                          AuthenticationManager authenticationManager) {

        this.mapValidationErrorService = mapValidationErrorService;
        this.userService = userService;
        this.userValidator = userValidator;
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
    }

    //== REGISTRATION MAPPINGS == (/api/users/register)
    @PostMapping(Mappings.USER_REGISTER)
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {

        userValidator.validate(user, result);

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if (errorMap != null) {
            return errorMap;
        }

        User newUser = userService.saveUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    //== LOGIN MAPPINGS == (/api/users/login)
    @PostMapping(Mappings.LOGIN)
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap != null){
            return errorMap;
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = SecurityConstants.TOKEN_PREFIX + jwtTokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JWTLoginSuccesResponse(true, jwt));
    }
}
