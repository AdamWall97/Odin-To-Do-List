//Create Project Button
function createCreateProjectButton(){
    document.getElementById("ProjectCreated").addEventListener("click",createFormProjAtt)
}
function createFormProjAtt(){
    createInputsProj(); //creates input values
    createSubmitButton(); //create submit button
}
function createSubmitButton(){
    var s = document.createElement("button");
    s.id = "SubmitProject";
    s.addEventListener("click",inputProjectData);
    document.body.appendChild(s);
}
function inputProjectData(){

    var name = document.getElementById("nameInput").value;
    var description = document.getElementById("descriptionInput").value;

    removeProjInput();
    var newProject = projectFactory(name,description);
    projects.createProject(newProject);
    console.log(name);
    console.log(description);
}

function removeProjInput(){
    document.getElementById("nameInput").remove();
    document.getElementById("descriptionInput").remove();
    document.getElementById("SubmitProject").remove();
}

function createInputsProj(){
    var name = document.createElement("input");
    var description = document.createElement("input");
    var br = document.createElement("br");
    name.setAttribute("type","text");
    name.id = "nameInput";
    description.setAttribute("type","text");
    description.setAttribute("placeholder","Project Description");
    description.id = "descriptionInput";
    name.setAttribute("placeholder","Project Name");
    
    document.body.appendChild(name);
    document.body.appendChild(br.cloneNode());
   document.body.appendChild(description);
    document.body.appendChild(br.cloneNode());
}





export {createCreateProjectButton};

//View Project with toDos

//View invdividual todo

//Edit to do

//Delete a todo


