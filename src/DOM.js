import {newProjectDriver} from "./index"
//Create Project Button
//Obtains name, scleasr inputs, starts driver function
function createProjectDOM(){
    var name = document.getElementById("nameInput").value;
    var description = document.getElementById("descriptionInput").value;
    document.getElementById("descriptionInput").value = "";
    document.getElementById("nameInput").value = "";
    newProjectDriver(name,description);
}





export {createProjectDOM};

//View Project with toDos

//View invdividual todo

//Edit to do

//Delete a todo


