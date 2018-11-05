package com.ozira.repository;

import com.ozira.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

    /**
     * Find a project based on its Project ID
     *
     * Note: This is not the ID that is used in the DB
     * but instead the ProjectId that is a part of the
     * Project domain item.
     *
     * @param projectId of the project you would like to return
     * @return the Project
     */
    Project findByProjectIdentifier(String projectId);

    /**
     * Find all of the projects that a specific user owns
     * @param username the username of the owner
     * @return an iterable of all projects owned by the user
     */
    Iterable<Project> findAllByProjectLeader(String username);
}
