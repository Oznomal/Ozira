package com.ozira.repository;

import com.ozira.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

    /**
     * Gets the list of project tasks based on the unique project identifier
     * @param projectIdentifier the unique project identifier
     * @return the list of project tasks associated with the project identifier
     */
    List<ProjectTask> findByProjectIdentifierOrderByPriority(String projectIdentifier);

    /**
     * Finds the project task by the project sequence
     * @param projectSequence the project sequence
     * @return the project task
     */
    ProjectTask findByProjectSequence(String projectSequence);
}
