import { plugins } from "./classes/plugins.js";
import * as core from "./plugins/core.js"
plugins.importPlugin(core.default)
{
    let context = require.context('./plugins/', true, /\.js$/)
    context.keys().forEach((element) => {
        let plugin = context(element).default
        if (!plugin.name)
            plugin.name = /[^\\\/]*[^](?=\..+$)/.exec(element)
        if (plugin.pluginId === "core") return
        plugins.importPlugin(plugin)
    });
    plugins.plugins.forEach((plugin) => {
        if (plugin.postLoad)
            plugin.postLoad()
    });
}
console.log(plugins)