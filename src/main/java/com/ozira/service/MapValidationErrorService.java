package com.ozira.service;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

public interface MapValidationErrorService {

    /**
     * Checks a response from an API method for HTTP Status Codes to see
     * if the there were any errors and returns them if necessary.
     *
     * @param result Binding Result that is bound with the object being checked for
     *               validation.
     *
     * @return if there are errors present then the result is a Map of KV pairs
     *         with the key being the field and the value being the error.
     *
     *         if there aren't any errors present then the method will return null.
     */
    ResponseEntity<?> mapValidationService(BindingResult result);
}
