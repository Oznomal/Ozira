package com.ozira.service;

import com.ozira.domain.Backlog;
import com.ozira.domain.ProjectTask;
import com.ozira.repository.BacklogRepository;
import com.ozira.repository.ProjectTaskRepository;
import com.ozira.util.constants.enums.ProjectStatus;
import com.ozira.util.constants.logging.LogConstants;
import com.ozira.util.exceptions.ProjectNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ProjectTaskServiceImpl implements ProjectTaskService{

    //== FIELDS ==
    private final BacklogRepository backlogRepository;
    private final ProjectTaskRepository projectTaskRepository;
    private final ProjectService projectService;


    //== CONSTRUCTORS ==
    @Autowired
    public ProjectTaskServiceImpl(BacklogRepository backlogRepository,
                                  ProjectTaskRepository projectTaskRepository,
                                  ProjectService projectService){
        this.backlogRepository = backlogRepository;
        this.projectTaskRepository = projectTaskRepository;
        this.projectService = projectService;
    }

    //== PUBLIC METHODS ==
    @Override
    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username){

        //Project Tasks need to be added to a specific project, means project != null and backlog exists
        Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier, username).getBacklog();

        //Set the backlog to the project task
        projectTask.setBacklog(backlog);

        //Set the project sequence: ex. HERO-01 HERO-02 etc
        Integer backlogSequence = backlog.getPtSequence();

        //Update the backlog sequence
        backlog.setPtSequence(++backlogSequence);

        projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);

        //Set the initial priority and status when each one is respectively null
        if(projectTask.getPriority() == null || projectTask.getPriority() == 0)
            projectTask.setPriority(3);

        if(projectTask.getStatus() == null || projectTask.getStatus().isEmpty())
            projectTask.setStatus(ProjectStatus.TODO.name());

        ProjectTask savedProjectTask = projectTaskRepository.save(projectTask);
        if(savedProjectTask != null)
            log.info(LogConstants.SUCCESSFULLY_SAVED_PREFIX + "Project Task = {}", savedProjectTask);

        return savedProjectTask;
    }

    @Override
    public Iterable<ProjectTask> findBacklogById(String projectIdentifier, String username) {
        projectService.findProjectByIdentifier(projectIdentifier, username);
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(projectIdentifier.toUpperCase());
    }

    @Override
    public ProjectTask findProjectTaskByProjectSequence(String backlogId, String projectSequence, String username) {
        backlogId = backlogId.toUpperCase();
        projectSequence = projectSequence.toUpperCase();

        projectService.findProjectByIdentifier(backlogId, username);

        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(projectSequence);
        if(projectTask == null)
            throw new ProjectNotFoundException("Project Task [" + projectSequence + "] does not exist");

        if(!projectTask.getProjectIdentifier().equals(backlogId))
            throw new ProjectNotFoundException("Project Task [" + projectSequence + "] does not exist in project: " +
                    backlogId);

        return projectTask;
    }

    @Override
    public ProjectTask updateByProjectSequence(ProjectTask updatedProjectTask, String backlogId, String projectSequence,
                                               String username) {
        backlogId = backlogId.toUpperCase();
        projectSequence = projectSequence.toUpperCase();

        //Fetch Project Task from the DB based on URL params (performs validation part 1)
        ProjectTask projectTask = findProjectTaskByProjectSequence(backlogId, projectSequence, username);

        //Perform additional validation to ensure that the updated task is referencing the same task we fetched from DB
        if(updatedProjectTask.getProjectIdentifier() == null ||
                !updatedProjectTask.getProjectIdentifier().equals(projectTask.getProjectIdentifier()))
            throw new ProjectNotFoundException("The updated project identifier does not match the existing identifier");

        if(updatedProjectTask.getProjectSequence() == null ||
                !updatedProjectTask.getProjectSequence().equals(projectTask.getProjectSequence()))
            throw new ProjectNotFoundException("The updated task sequence does not match the existing task sequence");

        //If all is well, set the project task to the updated task and return updated task
        projectTask = updatedProjectTask;

        ProjectTask savedProjectTask = projectTaskRepository.save(projectTask);
        if(savedProjectTask != null)
            log.info(LogConstants.SUCCESSFULLY_UPDATED_PREFIX + "Project Task = {}", savedProjectTask);

        return savedProjectTask;

        //TODO: Surround this section in try/catch block to handle SQL errors
    }

    @Override
    public void deleteProjectTaskByProjectSequence(String backlogId, String projectSequence, String username) {
        backlogId = backlogId.toUpperCase();
        projectSequence = projectSequence.toUpperCase();
        ProjectTask projectTask = findProjectTaskByProjectSequence(backlogId, projectSequence, username);
        projectTaskRepository.delete(projectTask);
        log.info(LogConstants.DELETED_AN_ITEM_PREFIX + "Project Task = {}", projectTask);
    }
}
