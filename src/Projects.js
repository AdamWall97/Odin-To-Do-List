import { todosFactory } from "./toDos";

function moveItem(arr,itemIndex,targetIndex){
    let itemRemoved = arr.splice(itemIndex,1);
    arr.splice(targetIndex,0,itemRemoved[0]);
    return arr;
}

const projectFactory = (projectTitle,projectDescription) => {

    var todolist = [];
    const getProjectTitle = () => projectTitle;
    const getProjectDescription = () => projectDescription;



    const todoShow = (todo) => {
        cleartoDos(); //delete old Divs
        for (let i = 0;i < todolist.length;i++){
            createtodoDiv(todolist[i]);
            createtodoExpand(todolist[i]);
            createtodoDeleteButton(todolist[i]);
        }

    };

//CREATING DIV TO DO


const createtodoDiv = (todo) => {
    var newtodo=  document.createElement("div");
    newtodo.className = "ToDo";
    newtodo.id = todo.getTitle();
    newtodo.innerText = "Title: "+ todo.getTitle()+ " Description: "+todo.getDescription();
    document.getElementById(todo.getProject()).appendChild(newtodo);
}

const createtodoExpand = (todo) => {
   var newButton = document.createElement("button");
   newButton.id = todo.getTitle() + " todo Expand";
   newButton.innerText= "Expand To Do Item";
   newButton.addEventListener("click",todo.todoExpand);
   document.getElementById(todo.getTitle()).append(newButton);
}
const createtodoDeleteButton = (todo) => {
    var newButton = document.createElement("button");
    newButton.id = todo.getTitle() + " todo Delete";
    newButton.innerText= "Delete To Do Item";
    newButton.addEventListener("click",todo.todoDelete);
    document.getElementById(todo.getTitle()).append(newButton);
 }

    const cleartoDos = () => {
        const toDos = document.querySelectorAll(".ToDo");
        toDos.forEach(todo => {
        
            todo.remove();
        });

    };

// CLEAR TO DO


    //adds todo object to todo list
    const todoCreate = () => {
    
    var title = prompt("Please input title of to Do");
    var description = prompt("Please input Desciption of to Do");
    var dateInput = prompt("Please input due date of to Do (In form MM/DD/YYYY");
    var priority = prompt("Please input Priority of to Do ('high'/'low')");
    var note = prompt("Please input notes if any");
    var dateArr = dateInput.split("/");
    var project = getProjectTitle() + getProjectDescription();
    //Date object year 
    var dateOb = new Date(dateArr[2],dateArr[0],dateArr[1]);
    //title,description,dueDate,priority,notes)
    var toDo = todosFactory(title,description,dateOb,priority,note,project);
    todolist.push(toDo);
    todoShow(toDo);
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

    return{getProjectTitle,getProjectDescription,removeProjectFac,todoCreate}

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
            createProjectDiv(projectlist[i]);
            createToDoButton(projectlist[i]);
            createDeleteButton(projectlist[i]);
        }
    }
    const clearProjects = () => {
        const Projects = document.querySelectorAll(".Project");
        Projects.forEach(project => {
            project.remove();
        });
    } 

    const createProjectDiv = (project) => {
        var newProject =  document.createElement("div");
        newProject.className = "Project";
        newProject.id = project.getProjectTitle() + project.getProjectDescription();
        newProject.innerText = project.getProjectTitle();
        document.getElementById("Project Section").appendChild(newProject);
    }

    const createToDoButton = (project) => {
       var newButton = document.createElement("button");
       newButton.id = project.getProjectTitle() + " Create ToDo";
       newButton.innerText= "Add To Do Item";
       newButton.addEventListener("click",project.todoCreate);
       document.getElementById(project.getProjectTitle() + project.getProjectDescription()).append(newButton);
    }
    const createDeleteButton = (project) => {
        var newButton = document.createElement("button");
        newButton.id = project.getProjectTitle()+ " Delete";
        newButton.innerText= "Delete Project";
        newButton.addEventListener("click",project.removeProjectFac);
        document.getElementById(project.getProjectTitle() + project.getProjectDescription()).append(newButton);
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