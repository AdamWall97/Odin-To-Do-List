const todosFactory = (title,description,dueDate,priority,notes) => {

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getNotes = () => notes;

    const setTitle = (inTitle) => inTitle = title;
    const setDescription = (inDescription) => inDescription = description;
    const setDueDate = (inDuedate) => indueDate = dueDate;
    const setNotes = (inNotes) => inNotes = notes;


    return 

};

function moveItem(arr,itemIndex,targetIndex){
    let itemRemoved = arr.splice(itemIndex,1);
    arr.splice(targetIndex,0,itemRemoved[0]);
    return arr;
}

const projectFactory = (projectTitle,projectDescription) => {

    var todolist = {};
    const getProjectTitle = () => projecttitle;
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
        todolist.splice(todoFind(todotitle,todoscrip),1);
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




    return 

};

const projects = (() => {

    var projectlist = {};


    const createProject = (newProject) => {
        projectlist.push(newProject);
    }


    const removeProject = (project) => {
        projectlist.splice(projectFind(project.getProjectTitle,project.getProjectDescription))
    }

    const projectFind = (projtitle,projdescrip) => {
        for(var i = 0;i < projectlist.length;i++){
            if (projectlist[i].getProjectTitle == projtitle && projectlist[i].getProjectDescription == projdescrip){
                return i;
            }
        }
        return "No value found"; 
    }

})();


//create DOMS



//Create Project Button

function createProjectDOM(){
    var FormData = createForm();

    
}

function createForm(){
    createBreak();
    //Form
    const form = document.createElement("form");
    form.setAttribute("method","post");
    form.setAttribute("action","/Project");

    
}
//View Project with toDos

//View invdividual todo

//Edit to do

//Delete a todo








