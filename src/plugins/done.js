import { Plugin } from "../classes/plugins.js"
import { tasks } from "../classes/tasks.js"
export default new Plugin({
    "name": "Done",
    "dependencies": ["core"],
    "hidden": false,
    "pluginId": "done",
    "taskRender": function (li, task) {
        let done = document.createElement("span")
        done.className = "doneButton"
        done.innerText = " ✅"
        done.style = "cursor: pointer;"
        done.addEventListener('click', () => {
            task.remove()
            tasks.renderTasks()
        })
        li.appendChild(done)
        return li

    }
}) 