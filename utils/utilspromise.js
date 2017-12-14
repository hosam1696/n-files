const {readFile, existsSync, lstat} = require('fs');
let path = require('fs');

const {promisify} = require('util');


module.exports = {
    readP  : promisify(readFile),
    exist  : promisify(existsSync),
    status : promisify(lstat) 
}