const {resolve, dirname} = require('path');

const projectDir = dirname(module.parent.parent.filename);
const resolvePath = f => resolve(projectDir, f);

module.exports = {
    projectDir,
    resolvePath
};