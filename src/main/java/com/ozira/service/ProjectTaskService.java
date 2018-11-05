package com.ozira.service;

import com.ozira.domain.ProjectTask;

public interface ProjectTaskService {

    /**
     * Creates a new Project Task
     * @param projectIdentifier the project identifier that belongs to the user
     * @param projectTask the project task that needs to be added
     * @param username the user who the project task should belong to
     * @return the newly created project task
     */
    ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username);

    /**
     * Finds the backlog based on the project identifier
     * @param projectIdentifier the unique project identifier
     * @param username the user who the backlog belongs to
     * @return the project tasks associated with the backlog
     */
    Iterable<ProjectTask> findBacklogById(String projectIdentifier, String username);

    /**
     * Finds the project task by the project sequence
     * @param projectSequence the project sequence
     * @param username the username of the user who should own the project task
     * @return the project task
     */
    ProjectTask findProjectTaskByProjectSequence(String backlogId, String projectSequence, String username);

    /**
     * Updates the project task
     * @param projectTask the project task to update
     * @param backlogId the unique project identifier, used to locate the project and backlog
     * @param projectSequence the project sequence or task id to be updated
     * @param username the user
     * @return the updated Project Task
     */
    ProjectTask updateByProjectSequence(ProjectTask projectTask, String backlogId, String projectSequence, String username);


    /**
     * Deletes a project task from a project
     * @param backlogId the unique project identifier
     * @param projectSequence the project sequence that you would like to delete
     * @param username the user
     */
    void deleteProjectTaskByProjectSequence(String backlogId, String projectSequence, String username);
}
