const fs = require("fs")
const myRequire = (moduleName) => {
    const id = myRequire.resolve(moduleName);
    if(myRequire.cache[id]) {
        return myRequire.cache[id].exports;
    }

    const myModule = {
        exports : {},
        id : id
    }

    //update cache
    myRequire.cache[id] = myModule;

    //load module
    loadModule(id, myModule, myRequire);

    return myModule.exports;
}

myRequire.cache = {};
myRequire.resolve = (moduleName) => {
    console.log("Resolving module name")
    return moduleName + '.js';
}

module.exports = myRequire;

loadModule = (filename, myModule, myRequire) => {
    console.log("Loading module name.");
    const wrappedSource = `(function(module, exports, require) {
        ${fs.readFileSync(filename)}
        })(myModule, myModule.exports, myRequire);`
    eval(wrappedSource);
}