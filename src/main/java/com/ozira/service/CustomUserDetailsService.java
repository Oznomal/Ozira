package com.ozira.service;

import com.ozira.domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface CustomUserDetailsService extends UserDetailsService {

    /**
     * Gets the user based on the database User ID
     * @param id the Database User ID
     * @return the User
     */
    User loadUserById(Long id);
}
