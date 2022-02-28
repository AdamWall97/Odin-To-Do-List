const todosFactory = (title,description,dueDate,priority,notes,project) => {

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    const getNotes = () => notes;
    const getProject = () => project;
    const setTitle = (inTitle) => inTitle = title;
    const setDescription = (inDescription) => inDescription = description;
    const setDueDate = (inDuedate) => {
        
    }
    const setNotes = (inNotes) => inNotes = notes;

   
    const todoExpand = () => {
        
        var expandbutton = document.getElementById(getTitle() + " todo Expand");
        expandbutton.innerText = "Collapse To Do Item";
        expandbutton.addEventListener("click",todoCollapse);
        var DivExpand = document.getElementById(getTitle());
        var paragraphdata = document.createElement("p");
        paragraphdata.textContent = "Title: "+ getTitle()+ " Description: "+getDescription() + " Due Date: "+getDueDate() + " Priority: "+getPriority() + " Notes: " + getNotes();
        DivExpand.appendChild(paragraphdata);
        DivExpand.appendChild(expandbutton);

    }

    const todoCollapse= () => {
        var DivCollapse = document.getElementById(getTitle());
        var paragraphdata = document.createElement("p");
        paragraphdata.textContent = "Title: "+ getTitle()+ " Description: "+getDescription();
        var Collapsebutton = document.getElementById(getTitle() + " todo Expand");
        Collapsebutton.innerText = "Expand To Do Item";
        Collapsebutton.addEventListener("click",todoExpand);
        
        DivCollapse.appendChild(paragraphdata);
        DivCollapse.appendChild(Collapsebutton);

    }

    const todoDelete = () => {
        var DivDelete = document.getElementById(getTitle());
        DivDelete.remove();
    }


    return{getTitle, getProject,getDescription,todoExpand,todoDelete} 

};

export {todosFactory};