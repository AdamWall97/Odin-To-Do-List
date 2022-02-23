/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory)\n/* harmony export */ });\nfunction moveItem(arr,itemIndex,targetIndex){\n    let itemRemoved = arr.splice(itemIndex,1);\n    arr.splice(targetIndex,0,itemRemoved[0]);\n    return arr;\n}\n\n\nconst projectFactory = (projectTitle,projectDescription) => {\n\n    var todolist = [];\n    const getProjectTitle = () => projectTitle;\n    const getProjectDescription = () => projectDescription;\n\n    //adds todo object to todo list\n    const todoCreate = (todo) => {\n        todolist.push(todo);\n    }\n\n    const getPriority = (todo) => {\n        return todoFind(todo.getTitle,todo.getDescription);\n    }\n\n    const setPriority = (todo,placement) => {\n        todolist = moveItem(todolist,getPriority(todo),placement);\n    }\n    //Removes todo object from to do list using todoFind\n    const todoComplete = (todotitle,tododescrip) => {\n        todolist.splice(todoFind(todotitle,tododescrip),1);\n    }\n    //finds todo Item using title and description\n    const todoFind = (todotitle,tododescrip) => {\n        for(var i = 0;i < todolist.length;i++){\n            if (todolist[i].getTitle == todotitle && todolist[i].getDescription == tododescrip){\n                return i;\n            }\n        }\n        return \"No value found\"; \n    }\n\n    const removeProjectFac = () => {\n        projects.removeProject(getProjectTitle(),getProjectDescription());\n        projects.showProjects();\n\n    }\n\n\n\n    return{getProjectTitle,getProjectDescription, removeProjectFac}\n\n};\n\nconst projects = (() => {\n\n    var projectlist = [];\n\n    const createProject = (newProject) => {\n        projectlist.push(newProject);\n        showProjects();\n    }\n    const removeProject = (title,description) => {\n        projectlist.splice(projectFind(title,description),1);\n    }\n\n    const showProjects = () => {\n        clearProjects(); //delete old Divs\n        for (let i = 0;i < projectlist.length;i++){\n            createProjectDiv(i);\n            createToDoButton(i);\n            createDeleteButton(i);\n        }\n    }\n    const clearProjects = () => {\n        const Projects = document.querySelectorAll(\".Project\");\n        Projects.forEach(project => {\n            project.remove();\n        });\n    } \n\n    const createProjectDiv = (i) => {\n        var newProject =  document.createElement(\"div\");\n        newProject.className = \"Project\";\n        newProject.id = \"Project \" + i;\n        newProject.innerText = projectlist[i].getProjectTitle();\n        document.getElementById(\"Project Section\").appendChild(newProject);\n    }\n\n    const createToDoButton = (i) => {\n       var newButton = document.createElement(\"button\");\n       newButton.id = projectlist[i].getProjectTitle() + \" Create ToDo\";\n       newButton.innerText= \"Add To Do Item\";\n       newButton.addEventListener(\"click\",projectlist[i].todoCreate);\n       document.getElementById(\"Project \" + i).append(newButton);\n    }\n\n    const createDeleteButton = (i) => {\n        var newButton = document.createElement(\"button\");\n        newButton.id = projectlist[i].getProjectTitle()+ \" Delete\";\n        newButton.innerText= \"Delete Project\";\n        newButton.addEventListener(\"click\",projectlist[i].removeProjectFac);\n        document.getElementById(\"Project \" + i).append(newButton);\n     }\n\n    const projectFind = (projtitle,projdescrip) => {\n        for(var i = 0;i < projectlist.length;i++){\n            if (projectlist[i].getProjectTitle() == projtitle && projectlist[i].getProjectDescription() == projdescrip){\n                return i;\n            }\n        }\n        return \"No value found\"; \n    }\n\n\n\n\n    return {createProject, removeProject,showProjects}\n\n})();\n\n\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/Projects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n\n\n\nnewProjectDriver(\"Project 1 \",\"Default Project\");\n\n\ndocument.getElementById(\"ProjectCreated\").addEventListener(\"click\",createProjectDOM);\n\nfunction createProjectDOM(){\n    var name = document.getElementById(\"nameInput\").value;\n    var description = document.getElementById(\"descriptionInput\").value;\n    document.getElementById(\"descriptionInput\").value = \"\";\n    document.getElementById(\"nameInput\").value = \"\";\n    newProjectDriver(name,description);\n\n}\n\n\n\nfunction newProjectDriver(name,description){\n    const newProject = (0,_Projects__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(name,description);\n    _Projects__WEBPACK_IMPORTED_MODULE_0__.projects.createProject(newProject);\n}\n\n\n\n\n//console.log(document.getElementById(\"Projname\").value);\n\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;