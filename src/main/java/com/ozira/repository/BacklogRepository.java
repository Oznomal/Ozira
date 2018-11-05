package com.ozira.repository;

import com.ozira.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {

    /**
     * Finds a backlog based on the unique project identifier
     * @param identifier the identifier associated with the backlog
     * @return the backlog
     */
    Backlog findByProjectIdentifier (String identifier);
}
