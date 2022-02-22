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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCreateProjectButton\": () => (/* binding */ createCreateProjectButton)\n/* harmony export */ });\n\n\n//create DOMS\n\n\n\n//Create Project Button\n\nfunction createCreateProjectButton(){\n    document.getElementById(\"ProjectCreated\").addEventListener(\"click\",createProjectForm)\n\n}\n\nfunction createProjectForm(){\n    var FormProjectData = createFormProjAtt();\n    var data\n    document.getElementsByTagName(\"body\")[0].appendChild(FormProjectData);\n\n\n}\n\nfunction createFormProjAtt(){\n  //  createBreak();\n    //Form\n    const form = document.createElement(\"form\");\n    form.setAttribute(\"method\",\"post\");\n    createInputsProj(form);\n    createSubmitButton(form);\n\n    return form;\n\n    \n}\n\nfunction createSubmitButton(form){\n    var s = document.createElement(\"input\");\n    s.setAttribute(\"type\",\"submit\");\n    s.setAttribute(\"value\",\"Submit\");\n    form.append(s);\n    console.log(document.getElementById(\"Projname\").value);\n\n\n}\n\nfunction createInputsProj(form){\n    var name = document.createElement(\"input\");\n    var description = document.createElement(\"input\");\n    var br = document.createElement(\"br\");\n    name.setAttribute(\"type\",\"text\");\n    name.setAttribute(\"name\",\"Projname\");\n    description.setAttribute(\"type\",\"text\");\n    description.setAttribute(\"name\",\"ProjDescription\");\n    description.setAttribute(\"placeholder\",\"Project Description\");\n    name.setAttribute(\"placeholder\",\"Project Name\");\n    \n    form.appendChild(name);\n    form.appendChild(br.cloneNode());\n    form.appendChild(description);\n    form.appendChild(br.cloneNode());\n}\n\n\n\n\n//View Project with toDos\n\n//View invdividual todo\n\n//Edit to do\n\n//Delete a todo\n\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n\n\n\n\n\n(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createCreateProjectButton)();\n\nconsole.log(document.getElementById(\"Projname\").value);\n\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/index.js?");

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