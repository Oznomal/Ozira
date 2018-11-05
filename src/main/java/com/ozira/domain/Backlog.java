package com.ozira.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Backlog {

    //== FIELDS ==
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    private Integer ptSequence = 0;
    private String projectIdentifier;

    //OneToOne with Project <-- Each project has exactly one backlog
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="project_id", nullable = false)
    @JsonIgnore //Breaks Infinite Recursion Problem
    private Project project; //This is the attribute name that is used by the mappedBy in backlog

    //OneToMany with project tasks <-- Backlog can have multiple tasks
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "backlog", orphanRemoval = true)
    private List<ProjectTask> projectTasks = new ArrayList<>();

    //== CONSTRUCTORS ==
    public Backlog(){}
}
