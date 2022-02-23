function moveItem(arr,itemIndex,targetIndex){
    let itemRemoved = arr.splice(itemIndex,1);
    arr.splice(targetIndex,0,itemRemoved[0]);
    return arr;
}

const projectFactory = (projectTitle,projectDescription) => {

    var todolist = [];
    const getProjectTitle = () => projectTitle;
    const getProjectDescription = () => projectDescription;

    //adds todo object to todo list
    const todoCreate = (todo) => {
        todolist.push(todo);
    }

    const getPriority = (todo) => {
        return todoFind(todo.getTitle,todo.getDescription);
    }

    const setPriority = (todo,placement) => {
        todolist = moveItem(todolist,getPriority(todo),placement);
    }
    //Removes todo object from to do list using todoFind
    const todoComplete = (todotitle,tododescrip) => {
        todolist.splice(todoFind(todotitle,tododescrip),1);
    }
    //finds todo Item using title and description
    const todoFind = (todotitle,tododescrip) => {
        for(var i = 0;i < todolist.length;i++){
            if (todolist[i].getTitle == todotitle && todolist[i].getDescription == tododescrip){
                return i;
            }
        }
        return "No value found"; 
    }

    const removeProjectFac = () => {
        projects.removeProject(getProjectTitle(),getProjectDescription());
        projects.showProjects();

    }



    return{getProjectTitle,getProjectDescription, removeProjectFac}

};

const projects = (() => {

    var projectlist = [];

    const createProject = (newProject) => {
        projectlist.push(newProject);
        showProjects();
    }
    const removeProject = (title,description) => {
        projectlist.splice(projectFind(title,description),1);
    }
    const showProjects = () => {
        clearProjects(); //delete old Divs
        for (let i = 0;i < projectlist.length;i++){
            createProjectDiv(i);
            createToDoButton(i);
            createDeleteButton(i);
        }
    }
    const clearProjects = () => {
        const Projects = document.querySelectorAll(".Project");
        Projects.forEach(project => {
            project.remove();
        });
    } 

    const createProjectDiv = (i) => {
        var newProject =  document.createElement("div");
        newProject.className = "Project";
        newProject.id = "Project " + i;
        newProject.innerText = projectlist[i].getProjectTitle();
        document.getElementById("Project Section").appendChild(newProject);
    }

    const createToDoButton = (i) => {
       var newButton = document.createElement("button");
       newButton.id = projectlist[i].getProjectTitle() + " Create ToDo";
       newButton.innerText= "Add To Do Item";
       newButton.addEventListener("click",projectlist[i].todoCreate);
       document.getElementById("Project " + i).append(newButton);
    }
    const createDeleteButton = (i) => {
        var newButton = document.createElement("button");
        newButton.id = projectlist[i].getProjectTitle()+ " Delete";
        newButton.innerText= "Delete Project";
        newButton.addEventListener("click",projectlist[i].removeProjectFac);
        document.getElementById("Project " + i).append(newButton);
     }
    const projectFind = (projtitle,projdescrip) => {
        for(var i = 0;i < projectlist.length;i++){
            if (projectlist[i].getProjectTitle() == projtitle && projectlist[i].getProjectDescription() == projdescrip){
                return i;
            }
        }
        return "No value found"; 
    }




    return {createProject, removeProject,showProjects}

})();



export { projects, projectFactory}