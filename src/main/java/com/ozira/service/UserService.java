package com.ozira.service;

import com.ozira.domain.User;

public interface UserService {

    /**
     * Saves a user to the DB
     * @param newUser the user to save
     * @return the user that was saved.
     */
    User saveUser(User newUser);
}
