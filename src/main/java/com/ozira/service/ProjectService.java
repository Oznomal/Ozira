package com.ozira.service;

import com.ozira.domain.Project;

public interface ProjectService {

    /**
     * Saves or updates a project.
     * @param project to be saved or updated.
     * @return the project that was saved or updated.
     */
    Project saveOrUpdateProject(Project project, String username);

    /**
     * Find a project based on its Project ID
     *
     * Note: This is not the ID that is used in the DB
     * but instead the ProjectId that is a part of the
     * Project domain item (projectIdentifier).
     *
     * @param projectId of the project you would like to return
     * @param username the username of the project owner
     * @return the Project
     */
    Project findProjectByIdentifier(String projectId, String username);

    /**
     * Find all of the projects that a specific user owns
     * @param username the username of the owner
     * @return an iterable of all projects owned by the user
     */
    Iterable<Project> findAllProjects(String username);

    /**
     * Deletes a project from the DB
     * @param projectIdentifier the Project Identifier of the project you would like to delete from the DB
     * @param username the username of the user the project should belong to
     */
    void deleteProjectByIdentifier(String projectIdentifier, String username);
}
