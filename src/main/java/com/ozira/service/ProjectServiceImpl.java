package com.ozira.service;

import com.ozira.domain.Backlog;
import com.ozira.domain.Project;
import com.ozira.domain.User;
import com.ozira.repository.BacklogRepository;
import com.ozira.repository.ProjectRepository;
import com.ozira.repository.UserRepository;
import com.ozira.util.constants.logging.LogConstants;
import com.ozira.util.exceptions.ProjectIdException;
import com.ozira.util.exceptions.ProjectNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ProjectServiceImpl implements ProjectService{

    //== FIELDS ==
    private final ProjectRepository projectRepository;
    private final BacklogRepository backlogRepository;
    private final UserRepository userRepository;

    //== CONSTRUCTORS ==
    @Autowired
    public ProjectServiceImpl(ProjectRepository projectRepository, BacklogRepository backlogRepository, UserRepository userRepository){
        this.projectRepository = projectRepository;
        this.backlogRepository = backlogRepository;
        this.userRepository = userRepository;
    }



    //== PUBLIC METHODS ==
    @Override
    public Project saveOrUpdateProject(Project project, String username){

        if(project.getId() != null){
            Project existingProject = projectRepository.findByProjectIdentifier(project.getProjectIdentifier());

            if(existingProject != null && !existingProject.getProjectLeader().equalsIgnoreCase(username)){
                throw new ProjectNotFoundException("Project not found in your account");
            }else if(existingProject == null){
                throw new ProjectNotFoundException("Project with ID: '"+project.getProjectIdentifier()+"' cannot be updated because it doesn't exist");
            }
        }

        try{
            String projectIdentifier = project.getProjectIdentifier().toUpperCase();
            User user = userRepository.findByUsername(username);

            project.setUser(user); //TODO: Find a better way to map this relationship, possibly in entity classes
            project.setProjectLeader(user.getUsername());
            project.setProjectIdentifier(projectIdentifier);

            // We only want to create a new backlog for new projects
            // not those that are only being updated.
            if(project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(projectIdentifier);
            }
            else{
                project.setBacklog(backlogRepository.findByProjectIdentifier(projectIdentifier));
            }

            Project savedProject = projectRepository.save(project);
            if(savedProject != null)
                log.info(LogConstants.SUCCESSFULLY_SAVED_PREFIX + "Project = {}", project);

            return savedProject;
        }
        catch(Exception e){
            String failedId = project.getProjectIdentifier().toUpperCase();
            log.error(LogConstants.FAILED_SAVE_PREFIX + "Project ID [" + failedId + "] Already Exists");
            throw new ProjectIdException("Project ID: " + failedId + " Already Exists");
        }
    }

    @Override
        public Project findProjectByIdentifier(String projectId, String username) {
        projectId = projectId.toUpperCase();

        Project project = projectRepository.findByProjectIdentifier(projectId);
        if(project == null) {
            log.error(LogConstants.FAILED_TO_LOCATE_PREFIX + "The Project is Null or the Project ID Does Not Exist.");
            throw new ProjectIdException("Project ID: '" + projectId + "' Does Not Exist");
        }

        //Check to make sure the project belongs to the requesting user
        if(!project.getProjectLeader().equals(username)){
            throw new ProjectNotFoundException("Project not found in your account.");
        }

        return project;
    }

    @Override
    public Iterable<Project> findAllProjects(String username){
        return projectRepository.findAllByProjectLeader(username);
    }

    @Override
    public void deleteProjectByIdentifier(String projectId, String username) {
        projectRepository.delete(findProjectByIdentifier(projectId, username));
        log.info(LogConstants.DELETED_AN_ITEM_PREFIX + "ProjectID = {}, Username = [" + username + "]", projectId);
    }
}
