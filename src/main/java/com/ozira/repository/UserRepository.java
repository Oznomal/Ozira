package com.ozira.repository;

import com.ozira.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    /**
     * Finds the user by the username
     * @param username the username token
     * @return the User that was located
     */
    User findByUsername(String username);

    /**
     * Finds the user by the Database ID
     * @param id the DB id of the user
     * @return the User that was located
     */
    User getById(Long id);
}
