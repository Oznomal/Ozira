package com.ozira.web;

import com.ozira.domain.ProjectTask;
import com.ozira.service.MapValidationErrorService;
import com.ozira.service.ProjectService;
import com.ozira.service.ProjectTaskService;
import com.ozira.util.constants.mappings.Mappings;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping(Mappings.BACKLOG_API)
@CrossOrigin
@Slf4j
public class BacklogController {

    //== FIELDS ==
    private final ProjectTaskService projectTaskService;
    private final MapValidationErrorService mapValidationErrorService;
    private final ProjectService projectService;

    //== CONSTRUCTORS ==
    @Autowired
    public BacklogController(ProjectTaskService projectTaskService, MapValidationErrorService mapValidationErrorService,
                             ProjectService projectService){
        this.projectTaskService = projectTaskService;
        this.mapValidationErrorService = mapValidationErrorService;
        this.projectService = projectService;
    }

    //== PUBLIC METHODS ==

    //== BACKLOG ID MAPPING == (api/backlog/{projectID})
    @PostMapping(Mappings.BACKLOG_ID)
    public ResponseEntity<?> addProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask,
                                                     BindingResult result, @PathVariable String backlogId,
                                                     Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap != null)
            return errorMap;

        ProjectTask projectTaskResponse = projectTaskService.addProjectTask(backlogId, projectTask, principal.getName());
        return new ResponseEntity<ProjectTask>(projectTaskResponse, HttpStatus.CREATED);
    }

    @GetMapping(Mappings.BACKLOG_ID)
    public Iterable<ProjectTask> getProjectBacklog(@PathVariable String backlogId, Principal principal){
        return projectTaskService.findBacklogById(backlogId, principal.getName());
    }


    //== PROJECT TASK MAPPINGS == (api/backlog/{projectId}/{projectTask})
    @GetMapping(Mappings.BACKLOG_AND_PROJECT_TASK_IDS)
    public ResponseEntity<?> getProjectTask(@PathVariable String backlogId, @PathVariable String projectSequence,
                                            Principal principal){
        ProjectTask projectTask = projectTaskService.findProjectTaskByProjectSequence(backlogId, projectSequence,
                principal.getName());
        return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
    }

    @PatchMapping(Mappings.BACKLOG_AND_PROJECT_TASK_IDS)
    public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
                                               @PathVariable String backlogId, @PathVariable String projectSequence,
                                               Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap != null)
            return errorMap;

        ProjectTask updatedTask = projectTaskService.updateByProjectSequence(projectTask, backlogId, projectSequence,
                principal.getName());
        return new ResponseEntity<ProjectTask>(updatedTask, HttpStatus.OK);
    }

    @DeleteMapping(Mappings.BACKLOG_AND_PROJECT_TASK_IDS)
    public ResponseEntity<?> deleteProjectTask(@PathVariable String backlogId, @PathVariable String projectSequence,
                                               Principal principal){
        projectTaskService.deleteProjectTaskByProjectSequence(backlogId, projectSequence, principal.getName());
        return new ResponseEntity<String>("Project Task " + projectSequence + " was successfully deleted", HttpStatus.OK);
    }


}
