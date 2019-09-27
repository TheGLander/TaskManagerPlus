import { Plugin } from "../classes/plugins.js"
export default new Plugin({
    "name": "Edit",
    "dependencies": ["core"],
    "hidden": false,
    "pluginId": "edit",
    "taskRender": function (li, task) {
        let done = document.createElement("span")
        done.className = "editButton"
        done.innerText = " 📝"
        done.style = "cursor: pointer;"
        done.addEventListener('click', () => {
            alert(li.innerHTML)
        })
        li.appendChild(done)
        return li

    }
})