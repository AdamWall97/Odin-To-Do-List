

//create DOMS



//Create Project Button

function createCreateProjectButton(){
    document.getElementById("ProjectCreated").addEventListener("click",createProjectForm)

}

function createProjectForm(){
    var FormProjectData = createFormProjAtt();
    var data
    document.getElementsByTagName("body")[0].appendChild(FormProjectData);


}

function createFormProjAtt(){
  //  createBreak();
    //Form
    const form = document.createElement("form");
    form.setAttribute("method","post");
    createInputsProj(form);
    createSubmitButton(form);

    return form;

    
}



function createSubmitButton(form){
    var s = document.createElement("input");
    s.setAttribute("type","submit");
    s.setAttribute("value","Submit");
    form.append(s);

}

function createInputsProj(form){
    var name = document.createElement("input");
    var description = document.createElement("input");
    var br = document.createElement("br");
    name.setAttribute("type","text");
    name.setAttribute("name","Projname");
    description.setAttribute("type","text");
    description.setAttribute("name","ProjDescription");
    description.setAttribute("placeholder","Project Description");
    name.setAttribute("placeholder","Project Name");
    
    form.appendChild(name);
    form.appendChild(br.cloneNode());
    form.appendChild(description);
    form.appendChild(br.cloneNode());
}


export {createCreateProjectButton};

//View Project with toDos

//View invdividual todo

//Edit to do

//Delete a todo


