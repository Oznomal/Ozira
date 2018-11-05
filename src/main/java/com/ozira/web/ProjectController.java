package com.ozira.web;

import com.ozira.domain.Project;
import com.ozira.service.MapValidationErrorService;
import com.ozira.service.ProjectService;
import com.ozira.util.constants.mappings.Mappings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping(Mappings.PROJECT_API)
@CrossOrigin
public class ProjectController {

    //== FIELDS ==
    private final ProjectService projectService;
    private final MapValidationErrorService mapValidationErrorService;



    //== CONSTRUCTORS ==
    @Autowired
    public ProjectController(ProjectService projectService, MapValidationErrorService mapValidationErrorService){
        this.projectService = projectService;
        this.mapValidationErrorService = mapValidationErrorService;
    }



    //== HANDLER METHODS ==
    //== BASE MAPPINGS == (api/project)
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project,
                                              BindingResult result, Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap != null)
            return errorMap;

        projectService.saveOrUpdateProject(project, principal.getName());
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }


    // == PROJECT ID MAPPINGS == (/api/project/{projectId})
    @GetMapping(Mappings.PROJECT_ID)
    public ResponseEntity<?> getProjectById(@PathVariable String projectId, Principal principal){
        Project project = projectService.findProjectByIdentifier(projectId, principal.getName());
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }
    @DeleteMapping(Mappings.PROJECT_ID)
    public ResponseEntity<?> deleteProject(@PathVariable String projectId, Principal principal){
        projectService.deleteProjectByIdentifier(projectId, principal.getName());
        return new ResponseEntity<String>("Project with ID: " + projectId + " was deleted.",
                HttpStatus.OK);
    }


    //== PROJECT ALL MAPPINGS == (/api/project/all)
    @GetMapping(Mappings.PROJECT_ALL)
    public Iterable<Project> getAllProjects(Principal principal){
        return projectService.findAllProjects(principal.getName());
    }


}
