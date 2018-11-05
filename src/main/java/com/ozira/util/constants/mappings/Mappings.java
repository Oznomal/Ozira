package com.ozira.util.constants.mappings;

public final class Mappings {

    //== CONSTANTS ==
    public static final String PROJECT_API = "api/project";
    public static final String PROJECT_ID = "/{projectId}";
    public static final String PROJECT_ALL = "/all";

    public static final String BACKLOG_API = "api/backlog";
    public static final String BACKLOG_ID = "/{backlogId}";
    public static final String PROJECT_TASK_ID = "/{projectSequence}";
    public static final String BACKLOG_AND_PROJECT_TASK_IDS = BACKLOG_ID + PROJECT_TASK_ID;

    public static final String USER_API = "/api/users";
    public static final String USER_REGISTER = "/register";
    public static final String LOGIN = "/login";

    //== CONSTRUCTORS ==
    private Mappings(){}
}
