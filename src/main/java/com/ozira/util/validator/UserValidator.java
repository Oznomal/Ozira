package com.ozira.util.validator;

import com.ozira.domain.User;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class UserValidator implements Validator {
    @Override
    public boolean supports(Class<?> aClass) {
        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object object, Errors errors) {
        User user = (User) object;

        //Password Length Validation
        if(user.getPassword().length() < 7){
            errors.rejectValue("password", "Length", "Password must be at least 7 characters");
        }

        //Confirm Passwords Match Validation
        if(!user.getConfirmPassword().equals(user.getPassword())){
            errors.rejectValue("confirmPassword", "Match", "Passwords must match");
        }
    }
}
