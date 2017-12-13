const {readFile} = require('fs');
const {promisify} = require('util');
const {resolve} = require('path');

const readP = promisify(readFile);
const FILE = require('./filec');


class NODEFILES {
    read(filename, options) {
        return readP(resolve(module.parent.filename,'..', filename), {...options,...{encoding:'utf8'}})
            .then(content=>new FILE(content)); 
    }
}


module.exports = new NODEFILES();