import {projects, projectFactory} from "./Projects"
import {compareAsc, format} from 'date-fns';
import {todosFactory} from "./toDos";

newProjectDriver("Project 1 ","Default Project");


document.getElementById("ProjectCreated").addEventListener("click",createProjectDOM);

document.getElementById("ProjectCreated").addEventListener("click",createtoDoDOM);


function createProjectDOM(){
    var name = document.getElementById("nameInput").value;
    var description = document.getElementById("descriptionInput").value;
    document.getElementById("descriptionInput").value = "";
    document.getElementById("nameInput").value = "";
    newProjectDriver(name,description)
}

function createtoDoDOM(){
    var name = prompt("Please input Name of to Do");
    var description = prompt("Please input Desciption of to Do");
    var dateInput = prompt("Please input due date of to Do (In form MM/DD/YYYY");
    var priority = prompt("Please input Priority of to Do ('high'/'low')");
    var note = prompt("Please input notes if any");

    var dateArr = dateInput.split("/");

    //Date object year 
    var dateOb = new Date(dateArr[2],dateArr[0],dateArr[1]);
    //title,description,dueDate,priority,notes)
    var toDo = todosFactory(name,description,dateOb,priority,note);
    
    


}



function newProjectDriver(name,description){
    const newProject = projectFactory(name,description);
    projects.createProject(newProject);
}




//console.log(document.getElementById("Projname").value);


