let curPrefix = ""
let logId = 0
/**
 * Gets the next Id and returns the old ID
 * @return The next logID
 */
let nextId = function () {
    return logId = (logId + 1).toString().padStart(3, "0")
}
/**
 * Sets the prefix for deferianciated logs
 * @param {string} prefix 
 */
let setPrefix = function (prefix) {
    curPrefix = prefix
}
/**
 * Throws an error.
 * @param {string} error
 */
let error = function (error) {
    throw new Error(`${curPrefix} ${nextId()} ${error}`)
}
/**
 * Logs a warn.
 * @param {string} warn
 */
let warn = function (warning) {
    console.warn(`${curPrefix} ${nextId()} ${warning}`)
}
/**
 * Logs some text.
 * @param {string} log
 */
let log = function (log) {
    console.log(`${curPrefix} ${nextId()} ${log}`)
}
/**
 * Logs some text.
 * @param {string} log
 */
let info = function (log) {
    console.info(`${curPrefix} ${nextId()} ${log}`)
}
/**
 * Resets the ID. Useful with restarting a piece of code
 */
let resetId = function () {
    logId = 0;
}
export {
    setPrefix,
    error,
    warn,
    log,
    info,
    resetId
}