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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCreateProjectButton\": () => (/* binding */ createCreateProjectButton)\n/* harmony export */ });\n\n\n//create DOMS\n\n\n\n//Create Project Button\nfunction createCreateProjectButton(){\n    document.getElementById(\"ProjectCreated\").addEventListener(\"click\",createFormProjAtt)\n}\n\nfunction createFormProjAtt(){\n    createInputsProj(); //creates input values\n    createSubmitButton(); //create submit button\n}\n\n\n\nfunction createSubmitButton(){\n    var s = document.createElement(\"button\");\n    s.id = \"SubmitProject\";\n    s.addEventListener(\"click\",inputProjectData);\n    document.body.appendChild(s);\n    \n}\n\nfunction inputProjectData(){\n\n    var name = document.getElementById(\"nameInput\").value;\n    var description = document.getElementById(\"descriptionInput\").value;\n\n    removeProjInput();\n    var newProject = projectFactory(name,description);\n    projects.createProject(newProject);\n    console.log(name);\n    console.log(description);\n}\n\nfunction removeProjInput(){\n    document.getElementById(\"nameInput\").remove();\n    document.getElementById(\"descriptionInput\").remove();\n    document.getElementById(\"SubmitProject\").remove();\n}\n\nfunction createInputsProj(){\n    var name = document.createElement(\"input\");\n    var description = document.createElement(\"input\");\n    var br = document.createElement(\"br\");\n    name.setAttribute(\"type\",\"text\");\n    name.id = \"nameInput\";\n    description.setAttribute(\"type\",\"text\");\n    description.setAttribute(\"placeholder\",\"Project Description\");\n    description.id = \"descriptionInput\";\n    name.setAttribute(\"placeholder\",\"Project Name\");\n    \n    document.body.appendChild(name);\n    document.body.appendChild(br.cloneNode());\n   document.body.appendChild(description);\n    document.body.appendChild(br.cloneNode());\n}\n\n\n\n\n\n\n\n//View Project with toDos\n\n//View invdividual todo\n\n//Edit to do\n\n//Delete a todo\n\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/DOM.js?");

/***/ }),

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory)\n/* harmony export */ });\nfunction moveItem(arr,itemIndex,targetIndex){\n    let itemRemoved = arr.splice(itemIndex,1);\n    arr.splice(targetIndex,0,itemRemoved[0]);\n    return arr;\n}\n\n\n\nconst projectFactory = (projectTitle,projectDescription) => {\n\n    var todolist = {};\n    const getProjectTitle = () => projectTitle;\n    const getProjectDescription = () => projectDescription;\n\n    //adds todo object to todo list\n    const todoCreate = (todo) => {\n        todolist.push(todo);\n    }\n\n    const getPriority = (todo) => {\n        return todoFind(todo.getTitle,todo.getDescription);\n    }\n\n    const setPriority = (todo,placement) => {\n        todolist = moveItem(todolist,getPriority(todo),placement);\n    }\n    //Removes todo object from to do list using todoFind\n    const todoComplete = (todotitle,tododescrip) => {\n        todolist.splice(todoFind(todotitle,todoscrip),1);\n    }\n    //finds todo Item using title and description\n    const todoFind = (todotitle,tododescrip) => {\n        for(var i = 0;i < todolist.length;i++){\n            if (todolist[i].getTitle == todotitle && todolist[i].getDescription == tododescrip){\n                return i;\n            }\n        }\n        return \"No value found\"; \n    }\n\n\n    return \n\n};\n\n\n\n\nconst projects = (() => {\n\n    var projectlist = {};\n\n\n    const createProject = (newProject) => {\n        projectlist.push(newProject);\n    }\n\n\n    const removeProject = (project) => {\n        projectlist.splice(projectFind(project.getProjectTitle,project.getProjectDescription))\n    }\n\n    const projectFind = (projtitle,projdescrip) => {\n        for(var i = 0;i < projectlist.length;i++){\n            if (projectlist[i].getProjectTitle == projtitle && projectlist[i].getProjectDescription == projdescrip){\n                return i;\n            }\n        }\n        return \"No value found\"; \n    }\n\n})();\n\n\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/Projects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n\n\n\n\n\n\n\n\n(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createCreateProjectButton)();\n\n//console.log(document.getElementById(\"Projname\").value);\n\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/index.js?");

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