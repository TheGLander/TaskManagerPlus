import * as log from "../logging.js"
const currentPluginVer = 0
/**
 *  The class for Plugin Pool.
 */
class PluginPool {
    pluginVer;
    plugins = new Map();
    /**
     * 
     * @param {number} pluginVer The plugin version.
     */
    constructor(pluginVer) {
        this.pluginVer = pluginVer
    }
    /**
     * Validates a plugin. Throws an error if validation fails.
     * @param {Plugin} plugin The plugin to validate.
     */
    validatePlugin(plugin) {
        log.setPrefix("PLUGIN")
        let testList = [ //? The list of checks to perform on plugin
            {
                "name": "name",
                "checks": ["undefined"],
                "postCheck": (plugin) => {
                    log.setPrefix("PLUGIN " + plugin.name)
                }
            }, {
                "name": "pluginVer",
                "checks": ["undefined", "compare"],
                "compareWith": this.pluginVer
            }, {
                "name": "dependencies",
                "checks": ["undefined", "type"],
                "requiredType": "array"
            }, {
                "name": "pluginId",
                "checks": ["undefined", "type", "unique"],
                "requiredType": "string"
            }
        ]
        if (!plugin) log.error("Plugin is undefined.")
        for (let i in testList) {
            let checks = testList[i].checks
            let property = plugin[testList[i]["name"]]
            for (let x in checks) {
                switch (checks[x]) {
                    case "undefined":
                        if (property === undefined)
                            log.error(`${testList[i]["name"]} must not be undefined.`)
                        break;
                    case "compare":
                        if (testList[i]["compareWith"] === undefined) {
                            log.setPrefix("VALIDATION")
                            log.error("Compares must have compareWith")
                        }
                        if (property !== testList[i]["compareWith"])
                            log.error(`Wrong ${testList[i]["name"]}.`)
                        break;
                    case "type":
                        if (testList[i]["requiredType"] === undefined) {
                            log.setPrefix("VALIDATION")
                            log.error("Type checks must have requiredType")
                        }
                        if (typeof (property) !== testList[i]["requiredType"] && !(Array.isArray(property) && (testList[i]["requiredType"] === "array")))
                            log.error(`${testList[i]["name"]} must have type of ${testList[i]["requiredType"]}, value with type ${typeof (property)} supplied.`)
                        break;
                    case "unique":
                        if (plugins.plugins.has(plugin.pluginId))
                            log.error(`${testList[i]["name"]} must be unique.`)
                        break;
                    default:
                        log.setPrefix("VALIDATION")
                        log.error("Unknown validation type.")
                        break;
                }
            }
            if (testList[i].postCheck)
                testList[i].postCheck(plugin)
        }
    }
    /**
     * Imports a plugin.
     * @param {Plugin} plugin The plugin to import.
     */
    importPlugin(plugin) {
        try {
            this.validatePlugin(plugin)
            this.plugins.set(plugin.pluginId, plugin)
            if (plugin.onImport)
                plugin.onImport()
        } catch (err) {
            alert("Error while trying to import plugin:\n" + err)
            throw new Error(err)
        }
    }
}
/**
 *  The class for creating Plugins
 */
class Plugin {
    pluginVer = 0;
    name;
    onImport;
    dependencies = ["core"];
    pluginId;
    hidden = false;
    onImport = function () { };
    constructor(args) {
        for (let i in Object.keys(args))
            this[Object.keys(args)[i]] = Object.values(args)[i]
    }
}
let plugins = new PluginPool(currentPluginVer)
export {
    plugins,
    PluginPool,
    Plugin
}