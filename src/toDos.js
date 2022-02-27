const todosFactory = (title,description,dueDate,priority,notes,project) => {

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getNotes = () => notes;
    const getProject = () => project;
    const setTitle = (inTitle) => inTitle = title;
    const setDescription = (inDescription) => inDescription = description;
    const setDueDate = (inDuedate) => {
        
    }
    const setNotes = (inNotes) => inNotes = notes;

   


    return{getTitle, getProject,getDescription} 

};

export {todosFactory};