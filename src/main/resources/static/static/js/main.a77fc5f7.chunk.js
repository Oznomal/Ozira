(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(78)},45:function(e,t,a){},47:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(34),o=a.n(c),s=(a(45),a(3)),i=a(4),l=a(8),m=a(5),u=a(7),p=(a(47),a(79)),d=a(6),h=a(9),v=a.n(h),f=a(16),b=a(13),E=a.n(b),j="GET_BACKLOG",g="GET_PROJECT_TASK",N="DELETE_PROJECT_TASK",y=function(e,t){return function(){var a=Object(f.a)(v.a.mark(function a(r){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.a,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),n.a.createElement(p.a,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project")))))))}}]),t}(r.Component),k=Object(d.b)(null,{deleteProject:function(e){return function(){var t=Object(f.a)(v.a.mark(function t(a){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure? This will delete the project and all of its data.")){t.next=4;break}return t.next=3,E.a.delete("/api/project/".concat(e));case 3:a({type:"DELETE_PROJECT",payload:e});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(O),C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(C,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map(function(e){return n.a.createElement(k,{key:e.id,project:e})})))))}}]),t}(r.Component),w=Object(d.b)(function(e){return{project:e.project}},{getProjects:function(){return function(){var e=Object(f.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/project/all");case 2:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(S),T=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},P=a(22),D=a.n(P),x=function(){return function(e){localStorage.removeItem("jwtToken"),T(!1),e({type:"SET_CURRENT_USER",payload:!1})}},R=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e=this.props.security,t=e.validToken,a=e.user,r=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{to:"/register",className:"nav-link "},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{to:"/login",className:"nav-link"},"Login")))),c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{to:"/dashboard",className:"nav-link",href:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{to:"/dashboard",className:"nav-link "},n.a.createElement("i",{className:"fas fa-user-circle mr-1"}),a.firstName," ",a.lastName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{to:"/logout",className:"nav-link",onClick:this.logout.bind(this)},"Logout")))),o=t&&a?c:r;return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(p.a,{to:"/",className:"navbar-brand",href:"Dashboard.html"},"Personal Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),o))}}]),t}(r.Component),I=Object(d.b)(function(e){return{security:e.security}},{logout:x})(R),_=(a(75),a(80)),G=a(83),U=a(82),B=a(15),q=a(2),A=a(10),L=a.n(A),M=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(Object(q.a)(e))),e.onSubmit=e.onSubmit.bind(Object(q.a)(Object(q.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:L()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:this.state.startDate,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:this.state.endDate,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}]),t}(r.Component),J=Object(d.b)(function(e){return{errors:e.errors}},{createProject:y})(M),W=a(18),F=a(38),H={},X=a(19),K={projects:[],project:{}},V={projectTasks:[],projectTask:{}};var z={user:{},validToken:!1},Y=Object(W.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(X.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(X.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(X.a)({},e,{projects:e.projects.filter(function(e){return e.projectIdentifier!==t.payload})});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(X.a)({},e,{projectTasks:t.payload});case g:return Object(X.a)({},e,{projectTask:t.payload});case N:return Object(X.a)({},e,{projectTasks:e.projectTasks.filter(function(e){return e.projectSequence!==t.payload})});default:return e}},security:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_USER":return Object(X.a)({},t,{validToken:(e=a.payload,!!e),user:a.payload});default:return t}}}),$={},Q=[F.a],Z=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),ee=window.navigator.userAgent.includes("Chrome")&&Z?Object(W.e)(Y,$,Object(W.d)(W.a.apply(void 0,Q),Z)):Object(W.e)(Y,$,Object(W.d)(W.a.apply(void 0,Q))),te=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectIdentifier:"",projectName:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(Object(q.a)(e))),e.onSubmit=e.onSubmit.bind(Object(q.a)(Object(q.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectIdentifier,n=t.projectName,c=t.description,o=t.startDate,s=t.endDate;this.setState({id:a,projectIdentifier:r,projectName:n,description:c,startDate:o,endDate:s})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectIdentifier:this.state.projectIdentifier,projectName:this.state.projectName,description:this.state.description,startDate:this.state.startDate,endDate:this.state.endDate};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",disabled:!0,name:"projectIdentifier",value:this.state.projectIdentifier}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:L()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"startDate",value:this.state.startDate,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"endDate",value:this.state.endDate,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),ae=Object(d.b)(function(e){return{project:e.project.project,errors:e.errors}},{getProject:function(e,t){return function(){var a=Object(f.a)(v.a.mark(function a(r){var n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.get("/api/project/".concat(e));case 3:n=a.sent,r({type:"GET_PROJECT",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},createProject:y})(te),re=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.projectTask;return 1===a.priority?(t="bg-danger text-light",e="HIGH"):2===a.priority?(t="bg-warning text-light",e="MEDIUM"):3===a.priority&&(t="bg-info text-light",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(p.a,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence)},"Delete")))}}]),t}(r.Component),ne=Object(d.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(f.a)(v.a.mark(function a(r){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting Project Task ".concat(t,", this action cannot be undone."))){a.next=4;break}return a.next=3,E.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:N,payload:t});case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}})(re),ce=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.projectTasksProp.map(function(e){return n.a.createElement(ne,{key:e.id,projectTask:e})}),t=[],a=[],r=[],c=!0,o=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(c=(i=l.next()).done);c=!0){var m=i.value;"TO_DO"===m.props.projectTask.status?t.push(m):"IN_PROGRESS"===m.props.projectTask.status?a.push(m):"DONE"===m.props.projectTask.status&&r.push(m)}}catch(u){o=!0,s=u}finally{try{c||null==l.return||l.return()}finally{if(o)throw s}}return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),t}(r.Component),oe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.projectTasks;return e=function(e,t){return t.length<1?e.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectIdentifier):e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on This Board"):n.a.createElement(ce,{projectTasksProp:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(p.a,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),t}(r.Component),se=Object(d.b)(function(e){return{backlog:e.backlog,errors:e.errors}},{getBacklog:function(e){return function(){var t=Object(f.a)(v.a.mark(function t(a){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:j,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}})(oe),ie=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(q.a)(Object(q.a)(a))),a.onSubmit=a.onSubmit.bind(Object(q.a)(Object(q.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.a,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),le=Object(d.b)(function(e){return{errors:e.errors}},{addProjectTask:function(e,t,a){return function(){var r=Object(f.a)(v.a.mark(function r(n){return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),n({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}},r,this,[[0,7]])}));return function(e){return r.apply(this,arguments)}}()}})(ie),me=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectSequence:"",summary:"",projectIdentifier:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(Object(q.a)(e))),e.onSubmit=e.onSubmit.bind(Object(q.a)(Object(q.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlogId,a=e.projectSequence;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.projectTask,a=t.id,r=t.projectSequence,n=t.summary,c=t.projectIdentifier,o=t.acceptanceCriteria,s=t.status,i=t.priority,l=t.dueDate;this.setState({id:a,projectSequence:r,summary:n,projectIdentifier:c,acceptanceCriteria:o,status:s,priority:i,dueDate:l})}},{key:"onChange",value:function(e){this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,projectIdentifier:this.state.projectIdentifier,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.a,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ".concat(this.state.projectIdentifier," | Project Task ID: ").concat(this.state.projectSequence)),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),ue=Object(d.b)(function(e){return{projectTask:e.backlog.projectTask,errors:e.errors}},{getProjectTask:function(e,t,a){return function(){var r=Object(f.a)(v.a.mark(function r(n){var c;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:c=r.sent,n({type:g,payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}},r,this,[[0,7]])}));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(f.a)(v.a.mark(function n(c){return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),c({type:"GET_ERRORS",payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:"GET_ERRORS",payload:n.t0.response.data});case 10:case"end":return n.stop()}},n,this,[[0,7]])}));return function(e){return n.apply(this,arguments)}}()}})(me),pe=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start you own"),n.a.createElement("hr",null),n.a.createElement(p.a,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(p.a,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),t}(r.Component),de=Object(d.b)(function(e){return{security:e.security}})(pe),he=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",firstName:"",lastName:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(Object(q.a)(e))),e.onSubmit=e.onSubmit.bind(Object(q.a)(Object(q.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,firstName:this.state.firstName,lastName:this.state.lastName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":e.firstName}),placeholder:"First Name",name:"firstName",value:this.state.firstName,onChange:this.onChange}),e.firstName&&n.a.createElement("div",{className:"invalid-feedback"},e.firstName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":e.lastName}),placeholder:"Last Name",name:"lastName",value:this.state.lastName,onChange:this.onChange}),e.lastName&&n.a.createElement("div",{className:"invalid-feedback"},e.lastName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:L()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:L()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),ve=Object(d.b)(function(e){return{security:e.security,errors:e.errors}},{createNewUser:function(e,t){return function(){var a=Object(f.a)(v.a.mark(function a(r){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("api/users/register",e);case 3:t.push("/login"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()}})(he),fe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(q.a)(Object(q.a)(e))),e.onSubmit=e.onSubmit.bind(Object(q.a)(Object(q.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:L()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:L()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),be=Object(d.b)(function(e){return{security:e.security,errors:e.errors}},{login:function(e){return function(){var t=Object(f.a)(v.a.mark(function t(a){var r,n,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("/api/users/login",e);case 3:r=t.sent,n=r.data.token,localStorage.setItem("jwtToken",n),T(n),c=D()(n),a({type:"SET_CURRENT_USER",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}})(fe),Ee=a(39),je=a(81),ge=Object(d.b)(function(e){return{security:e.security}})(function(e){var t=e.component,a=e.security,r=Object(Ee.a)(e,["component","security"]);return n.a.createElement(G.a,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(je.a,{to:"/login"})}}))}),Ne=localStorage.jwtToken;if(Ne){T(Ne);var ye=D()(Ne);ee.dispatch({type:"SET_CURRENT_USER",payload:ye});var Oe=Date.now()/1e3;ye.exp<Oe&&(console.log("Token Expired, Logging Out User"),ee.dispatch(x()),window.location.href="/")}var ke=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,{store:ee},n.a.createElement(_.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(I,null),n.a.createElement(G.a,{exact:!0,path:"/",component:de}),n.a.createElement(G.a,{exact:!0,path:"/register",component:ve}),n.a.createElement(G.a,{exact:!0,path:"/login",component:be}),n.a.createElement(U.a,null,n.a.createElement(ge,{exact:!0,path:"/dashboard",component:w}),n.a.createElement(ge,{exact:!0,path:"/addProject",component:J}),n.a.createElement(ge,{exact:!0,path:"/updateProject/:id",component:ae}),n.a.createElement(ge,{exact:!0,path:"/projectBoard/:id",component:se}),n.a.createElement(ge,{exact:!0,path:"/addProjectTask/:id",component:le}),n.a.createElement(ge,{exact:!0,path:"/updateProjectTask/:backlogId/:projectSequence",component:ue})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.a77fc5f7.chunk.js.map