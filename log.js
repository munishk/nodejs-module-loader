let log = (message) => {
    console.log("Logging message from public:" + message);
    logInternal(message);
}

let logInternal = (message) => {
    console.log("Logging message from internal: " + message);
}

module.exports.log = log;