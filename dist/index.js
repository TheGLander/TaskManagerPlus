/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/plugins.js":
/*!********************************!*\
  !*** ./src/classes/plugins.js ***!
  \********************************/
/*! exports provided: plugins, PluginPool, Plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plugins\", function() { return plugins; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PluginPool\", function() { return PluginPool; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Plugin\", function() { return Plugin; });\n/* harmony import */ var _logging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logging.js */ \"./src/logging.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar currentPluginVer = 0;\n/**\r\n *  The class for Plugin Pool.\r\n */\n\nvar PluginPool =\n/*#__PURE__*/\nfunction () {\n  /**\r\n   * \r\n   * @param {number} pluginVer The plugin version.\r\n   */\n  function PluginPool(pluginVer) {\n    _classCallCheck(this, PluginPool);\n\n    _defineProperty(this, \"pluginVer\", void 0);\n\n    _defineProperty(this, \"plugins\", new Map());\n\n    this.pluginVer = pluginVer;\n  }\n  /**\r\n   * Validates a plugin. Throws an error if validation fails.\r\n   * @param {Plugin} plugin The plugin to validate.\r\n   */\n\n\n  _createClass(PluginPool, [{\n    key: \"validatePlugin\",\n    value: function validatePlugin(plugin) {\n      _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"setPrefix\"](\"PLUGIN\");\n      var testList = [//? The list of checks to perform on plugin\n      {\n        \"name\": \"name\",\n        \"checks\": [\"undefined\"],\n        \"postCheck\": function postCheck(plugin) {\n          _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"setPrefix\"](\"PLUGIN \" + plugin.name);\n        }\n      }, {\n        \"name\": \"pluginVer\",\n        \"checks\": [\"undefined\", \"compare\"],\n        \"compareWith\": this.pluginVer\n      }, {\n        \"name\": \"dependencies\",\n        \"checks\": [\"undefined\", \"type\"],\n        \"requiredType\": \"array\"\n      }, {\n        \"name\": \"pluginId\",\n        \"checks\": [\"undefined\", \"type\", \"unique\"],\n        \"requiredType\": \"string\"\n      }];\n      if (!plugin) _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"error\"](\"Plugin is undefined.\");\n\n      for (var i in testList) {\n        var checks = testList[i].checks;\n        var property = plugin[testList[i][\"name\"]];\n\n        for (var x in checks) {\n          switch (checks[x]) {\n            case \"undefined\":\n              if (property === undefined) _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"error\"](\"\".concat(testList[i][\"name\"], \" must not be undefined.\"));\n              break;\n\n            case \"compare\":\n              if (testList[i][\"compareWith\"] === undefined) {\n                _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"setPrefix\"](\"VALIDATION\");\n                _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"error\"](\"Compares must have compareWith\");\n              }\n\n              if (property !== testList[i][\"compareWith\"]) _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"error\"](\"Wrong \".concat(testList[i][\"name\"], \".\"));\n              break;\n\n            case \"type\":\n              if (testList[i][\"requiredType\"] === undefined) {\n                _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"setPrefix\"](\"VALIDATION\");\n                _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"error\"](\"Type checks must have requiredType\");\n              }\n\n              if (_typeof(property) !== testList[i][\"requiredType\"] && !(Array.isArray(property) && testList[i][\"requiredType\"] === \"array\")) _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"error\"](\"\".concat(testList[i][\"name\"], \" must have type of \").concat(testList[i][\"requiredType\"], \", value with type \").concat(_typeof(property), \" supplied.\"));\n              break;\n\n            case \"unique\":\n              if (plugins.plugins.has(plugin.pluginId)) _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"error\"](\"\".concat(testList[i][\"name\"], \" must be unique.\"));\n              break;\n\n            default:\n              _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"setPrefix\"](\"VALIDATION\");\n              _logging_js__WEBPACK_IMPORTED_MODULE_0__[\"error\"](\"Unknown validation type.\");\n              break;\n          }\n        }\n\n        if (testList[i].postCheck) testList[i].postCheck(plugin);\n      }\n    }\n    /**\r\n     * Imports a plugin.\r\n     * @param {Plugin} plugin The plugin to import.\r\n     */\n\n  }, {\n    key: \"importPlugin\",\n    value: function importPlugin(plugin) {\n      try {\n        this.validatePlugin(plugin);\n        this.plugins.set(plugin.pluginId, plugin);\n        if (plugin.onImport) plugin.onImport();\n      } catch (err) {\n        alert(\"Error while trying to import plugin:\\n\" + err);\n        throw new Error(err);\n      }\n    }\n  }]);\n\n  return PluginPool;\n}();\n/**\r\n *  The class for creating Plugins\r\n */\n\n\nvar Plugin = function Plugin(args) {\n  _classCallCheck(this, Plugin);\n\n  _defineProperty(this, \"pluginVer\", 0);\n\n  _defineProperty(this, \"name\", void 0);\n\n  _defineProperty(this, \"onImport\", void 0);\n\n  _defineProperty(this, \"dependencies\", [\"core\"]);\n\n  _defineProperty(this, \"pluginId\", void 0);\n\n  _defineProperty(this, \"hidden\", false);\n\n  _defineProperty(this, \"onImport\", function () {});\n\n  for (var i in Object.keys(args)) {\n    this[Object.keys(args)[i]] = Object.values(args)[i];\n  }\n};\n\nvar plugins = new PluginPool(currentPluginVer);\n\n\n//# sourceURL=webpack:///./src/classes/plugins.js?");

/***/ }),

/***/ "./src/classes/tasks.js":
/*!******************************!*\
  !*** ./src/classes/tasks.js ***!
  \******************************/
/*! exports provided: Task, TaskPool, tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TaskPool\", function() { return TaskPool; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tasks\", function() { return tasks; });\n/* harmony import */ var _plugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins.js */ \"./src/classes/plugins.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Task =\n/*#__PURE__*/\nfunction () {\n  function Task(args) {\n    _classCallCheck(this, Task);\n\n    _defineProperty(this, \"name\", \"\");\n\n    _defineProperty(this, \"taskPool\", void 0);\n\n    if (args) for (var i in Object.keys(args)) {\n      this[Object.keys(args)[i]] = Object.values(args)[i];\n    }\n  }\n  /**\r\n   * \r\n   * @param {HTMLLiElement} element The element to build the task on.\r\n   */\n\n\n  _createClass(Task, [{\n    key: \"remove\",\n    value: function remove() {\n      var _this = this;\n\n      this.taskPool.tasks.forEach(function (value, i) {\n        if (value === _this) delete _this.taskPool.tasks[i];\n      });\n    }\n  }, {\n    key: \"renderTask\",\n    value: function renderTask() {\n      var _this2 = this;\n\n      var newElement = document.createElement(\"li\");\n      _plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"].plugins.forEach(function (value) {\n        if (value.taskRender) newElement = value.taskRender(newElement, _this2);\n      });\n      return newElement;\n    }\n  }]);\n\n  return Task;\n}();\n\nvar TaskPool =\n/*#__PURE__*/\nfunction () {\n  function TaskPool(args) {\n    _classCallCheck(this, TaskPool);\n\n    _defineProperty(this, \"tasks\", new Array());\n\n    _defineProperty(this, \"listOl\", void 0);\n\n    if (args) for (var i in Object.keys(args)) {\n      this[Object.keys(args)[i]] = Object.values(args)[i];\n    }\n  }\n  /**\r\n   * Adds a task to the TaskPool.\r\n   * @param {Task} task The task to add.\r\n   */\n\n\n  _createClass(TaskPool, [{\n    key: \"addTask\",\n    value: function addTask(task, element) {\n      this.tasks.push(task);\n      task.taskPool = this;\n      if (element) this.renderTasks(element);\n    }\n    /**\r\n     *\r\n     * @param {HTMLDivElement} element The element to build the task list on.\r\n     */\n\n  }, {\n    key: \"renderTaskPool\",\n    value: function renderTaskPool(element) {\n      var newElement = element;\n      newElement.innerHTML = \"\";\n      _plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"].plugins.forEach(function (value) {\n        if (value.taskPoolRender) newElement = value.taskPoolRender(newElement);\n      });\n      this.renderedTaskPool = newElement;\n      return newElement;\n    }\n  }, {\n    key: \"rememberList\",\n    value: function rememberList(element) {\n      this.listOl = element;\n    }\n  }, {\n    key: \"renderTasks\",\n    value: function renderTasks(element) {\n      if (!element) element = this.listOl;\n      element.innerHTML = \"\";\n\n      for (var i in this.tasks) {\n        element.appendChild(this.tasks[i].renderTask(element));\n      }\n    }\n  }]);\n\n  return TaskPool;\n}();\n\nvar tasks = new TaskPool();\n\n\n//# sourceURL=webpack:///./src/classes/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/plugins.js */ \"./src/classes/plugins.js\");\n/* harmony import */ var _plugins_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/core.js */ \"./src/plugins/core.js\");\n\n\n\n\n_classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"].importPlugin(_plugins_core_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n{\n  var context = __webpack_require__(\"./src/plugins sync recursive \\\\.js$\");\n\n  context.keys().forEach(function (element) {\n    var plugin = context(element)[\"default\"];\n    if (!plugin.name) plugin.name = /[^\\\\\\/]*[^](?=\\..+$)/.exec(element);\n    if (plugin.pluginId === \"core\") return;\n    _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"].importPlugin(plugin);\n  });\n  _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"].plugins.forEach(function (plugin) {\n    if (plugin.postLoad) plugin.postLoad();\n  });\n}\nconsole.log(_classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"plugins\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logging.js":
/*!************************!*\
  !*** ./src/logging.js ***!
  \************************/
/*! exports provided: setPrefix, error, warn, log, info, resetId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPrefix\", function() { return setPrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warn\", function() { return warn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"info\", function() { return info; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetId\", function() { return resetId; });\n\n\nvar curPrefix = \"\";\nvar logId = 0;\n/**\r\n * Gets the next Id and returns the old ID\r\n * @return The next logID\r\n */\n\nvar nextId = function nextId() {\n  return logId = (logId + 1).toString().padStart(3, \"0\");\n};\n/**\r\n * Sets the prefix for deferianciated logs\r\n * @param {string} prefix \r\n */\n\n\nvar setPrefix = function setPrefix(prefix) {\n  curPrefix = prefix;\n};\n/**\r\n * Throws an error.\r\n * @param {string} error\r\n */\n\n\nvar error = function error(_error) {\n  throw new Error(\"\".concat(curPrefix, \" \").concat(nextId(), \" \").concat(_error));\n};\n/**\r\n * Logs a warn.\r\n * @param {string} warn\r\n */\n\n\nvar warn = function warn(warning) {\n  console.warn(\"\".concat(curPrefix, \" \").concat(nextId(), \" \").concat(warning));\n};\n/**\r\n * Logs some text.\r\n * @param {string} log\r\n */\n\n\nvar log = function log(_log) {\n  console.log(\"\".concat(curPrefix, \" \").concat(nextId(), \" \").concat(_log));\n};\n/**\r\n * Logs some text.\r\n * @param {string} log\r\n */\n\n\nvar info = function info(log) {\n  console.info(\"\".concat(curPrefix, \" \").concat(nextId(), \" \").concat(log));\n};\n/**\r\n * Resets the ID. Useful with restarting a piece of code\r\n */\n\n\nvar resetId = function resetId() {\n  logId = 0;\n};\n\n\n\n//# sourceURL=webpack:///./src/logging.js?");

/***/ }),

/***/ "./src/plugins sync recursive \\.js$":
/*!********************************!*\
  !*** ./src/plugins sync \.js$ ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./core.js\": \"./src/plugins/core.js\",\n\t\"./done.js\": \"./src/plugins/done.js\",\n\t\"./edit.js\": \"./src/plugins/edit.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/plugins sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src/plugins_sync_\\.js$?");

/***/ }),

/***/ "./src/plugins/core.js":
/*!*****************************!*\
  !*** ./src/plugins/core.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/plugins.js */ \"./src/classes/plugins.js\");\n/* harmony import */ var _classes_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/tasks.js */ \"./src/classes/tasks.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"Plugin\"]({\n  \"name\": \"Task Manager Core\",\n  \"dependencies\": [],\n  \"hidden\": false,\n  \"pluginId\": \"core\",\n  \"onImport\": function onImport() {},\n  \"postLoad\": function postLoad() {\n    /**\r\n     * \r\n     * @param {HTMLDivElement} div The dive to make list in\r\n     */\n    {\n      var _taskList = document.createElement(\"div\");\n\n      _taskList.className = \"taskListContainer\";\n      var taskContainer = _classes_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"tasks\"].renderTaskPool(_taskList);\n      document.body.appendChild(taskContainer);\n      _classes_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"tasks\"].rememberList(taskContainer.getElementsByClassName(\"taskList\").item(0));\n      _classes_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"tasks\"].renderTasks();\n    }\n  },\n  \"taskPoolRender\": function taskPoolRender(div) {\n    var newDiv = div;\n    var list = document.createElement(\"ol\");\n    list.className = \"taskList\";\n    newDiv.appendChild(list);\n    var newTaskContainer = document.createElement(\"div\");\n    var textInput = document.createElement(\"input\");\n    textInput.type = \"text\";\n    textInput.className = \"newTaskName\";\n    newTaskContainer.appendChild(textInput);\n    var taskAddButton = document.createElement(\"input\");\n    taskAddButton.type = \"button\";\n    taskAddButton.className = \"newTaskName\";\n    taskAddButton.value = \"Add\";\n    taskAddButton.addEventListener(\"click\", function () {\n      _classes_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"tasks\"].addTask(new _classes_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"Task\"]({\n        \"name\": textInput.value\n      }), list);\n    });\n    newTaskContainer.appendChild(taskAddButton);\n    newDiv.appendChild(newTaskContainer);\n    return newDiv;\n  },\n  \"taskRender\": function taskRender(li, task) {\n    li.innerText = task.name;\n    return li;\n  }\n}));\n\n//# sourceURL=webpack:///./src/plugins/core.js?");

/***/ }),

/***/ "./src/plugins/done.js":
/*!*****************************!*\
  !*** ./src/plugins/done.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/plugins.js */ \"./src/classes/plugins.js\");\n/* harmony import */ var _classes_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/tasks.js */ \"./src/classes/tasks.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"Plugin\"]({\n  \"name\": \"Done\",\n  \"dependencies\": [\"core\"],\n  \"hidden\": false,\n  \"pluginId\": \"done\",\n  \"taskRender\": function taskRender(li, task) {\n    var done = document.createElement(\"span\");\n    done.className = \"doneButton\";\n    done.innerText = \" ✅\";\n    done.style = \"cursor: pointer;\";\n    done.addEventListener('click', function () {\n      task.remove();\n      _classes_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"tasks\"].renderTasks();\n    });\n    li.appendChild(done);\n    return li;\n  }\n}));\n\n//# sourceURL=webpack:///./src/plugins/done.js?");

/***/ }),

/***/ "./src/plugins/edit.js":
/*!*****************************!*\
  !*** ./src/plugins/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/plugins.js */ \"./src/classes/plugins.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _classes_plugins_js__WEBPACK_IMPORTED_MODULE_0__[\"Plugin\"]({\n  \"name\": \"Edit\",\n  \"dependencies\": [\"core\"],\n  \"hidden\": false,\n  \"pluginId\": \"edit\",\n  \"taskRender\": function taskRender(li, task) {\n    var done = document.createElement(\"span\");\n    done.className = \"editButton\";\n    done.innerText = \" 📝\";\n    done.style = \"cursor: pointer;\";\n    done.addEventListener('click', function () {\n      alert(li.innerHTML);\n    });\n    li.appendChild(done);\n    return li;\n  }\n}));\n\n//# sourceURL=webpack:///./src/plugins/edit.js?");

/***/ })

/******/ });