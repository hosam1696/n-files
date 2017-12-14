const {readP, exist} = require('../utils/utilspromise');
const {resolve, dirname} = require('path');

const FILE = require('./filec');
const projectDir = dirname(module.parent.parent.filename);

class NODEFILES {

    read(filename, options) {
        return readP(this.resolvepath(filename), {...options,...{encoding:'utf8'}})
            .then(content=>new FILE(this.resolvepath(filename), content)); 
    }
    resolvepath(f) {
        return resolve(projectDir, f)
    }
    exists(filename) {
        return exist(filename);
    }

}


module.exports = new NODEFILES();