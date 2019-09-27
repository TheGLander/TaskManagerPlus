import { Plugin, plugins } from "../classes/plugins.js"
import { tasks, taskList, Task } from "../classes/tasks.js"
export default new Plugin({
    "name": "Task Manager Core",
    "dependencies": [],
    "hidden": false,
    "pluginId": "core",
    "onImport": function () { },
    "postLoad": function () {
        /**
         * 
         * @param {HTMLDivElement} div The dive to make list in
         */
        {
            let taskList = document.createElement("div")
            taskList.className = "taskListContainer"
            let taskContainer = tasks.renderTaskPool(taskList)
            document.body.appendChild(taskContainer)
            tasks.rememberList(taskContainer.getElementsByClassName("taskList").item(0))
            tasks.renderTasks()

        }
    },
    "taskPoolRender": function (div) {
        let newDiv = div;
        let list = document.createElement("ol")
        list.className = "taskList"
        newDiv.appendChild(list)
        let newTaskContainer = document.createElement("div")
        let textInput = document.createElement("input")
        textInput.type = "text"
        textInput.className = "newTaskName"
        newTaskContainer.appendChild(textInput)
        let taskAddButton = document.createElement("input")
        taskAddButton.type = "button"
        taskAddButton.className = "newTaskName"
        taskAddButton.value = "Add"
        taskAddButton.addEventListener("click", () => {
            tasks.addTask(new Task({ "name": textInput.value }), list)
        })
        newTaskContainer.appendChild(taskAddButton)
        newDiv.appendChild(newTaskContainer)
        return newDiv
    },
    "taskRender": function (li, task) {
        li.innerText = task.name
        return li
    }
})