const {readFile, existsSync, lstat, readdir} = require('fs');
const {promisify} = require('util');

module.exports = {
    readP  : promisify(readFile),
    isExist  : existsSync,
    status : promisify(lstat),
    dirFiles: promisify(readdir)
};