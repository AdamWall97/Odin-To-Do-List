import {projects, projectFactory} from "./Projects"
import {compareAsc, format} from 'date-fns';
import {todosFactory} from "./toDos";

newProjectDriver("Project 1 ","Default Project");


document.getElementById("ProjectCreated").addEventListener("click",createProjectDOM);



function createProjectDOM(){
    
    
    var name = document.getElementById("nameInput").value;
    var description = document.getElementById("descriptionInput").value;
    if(name == "" || description == ""){
        console.log("Please input a title and description");
    }
    else{
        document.getElementById("descriptionInput").value = "";
        document.getElementById("nameInput").value = "";
        newProjectDriver(name,description)
    }
}




function newProjectDriver(name,description){
    const newProject = projectFactory(name,description);
    projects.createProject(newProject);
}




//console.log(document.getElementById("Projname").value);


