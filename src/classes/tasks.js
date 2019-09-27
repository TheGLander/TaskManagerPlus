import { plugins } from "./plugins.js";
class Task {
    name = "";
    taskPool;
    constructor(args) {
        if (args)
            for (let i in Object.keys(args))
                this[Object.keys(args)[i]] = Object.values(args)[i]
    }
    /**
     * 
     * @param {HTMLLiElement} element The element to build the task on.
     */
    remove() {
        this.taskPool.tasks.forEach((value, i) => {
            if (value === this) delete this.taskPool.tasks[i]
        })
    }
    renderTask() {
        let newElement = document.createElement("li")
        plugins.plugins.forEach((value) => {
            if (value.taskRender)
                newElement = value.taskRender(newElement, this)
        })
        return newElement
    }
}
class TaskPool {
    tasks = new Array();
    listOl;
    constructor(args) {
        if (args)
            for (let i in Object.keys(args))
                this[Object.keys(args)[i]] = Object.values(args)[i]
    }
    /**
     * Adds a task to the TaskPool.
     * @param {Task} task The task to add.
     */
    addTask(task, element) {
        this.tasks.push(task)
        task.taskPool = this
        if (element)
            this.renderTasks(element)
    }
    /**
     *
     * @param {HTMLDivElement} element The element to build the task list on.
     */
    renderTaskPool(element) {
        let newElement = element
        newElement.innerHTML = ""
        plugins.plugins.forEach((value) => {
            if (value.taskPoolRender)
                newElement = value.taskPoolRender(newElement)
        })
        this.renderedTaskPool = newElement
        return newElement
    }
    rememberList(element) {
        this.listOl = element
    }
    renderTasks(element) {
        if (!element) element = this.listOl
        element.innerHTML = ""
        for (let i in this.tasks) {
            element.appendChild(this.tasks[i].renderTask(element))
        }
    }
}
let tasks = new TaskPool()
export {
    Task,
    TaskPool,
    tasks
}