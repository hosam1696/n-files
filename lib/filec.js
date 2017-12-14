const { isNullOrUndefined } = require("util");
const { EOL }= require('os');
const {status} = require('../utils/utilspromise');

class FILE {
    constructor(file,content = null) {
        this._file_path = file;
        this.content = content;
        this._lines = function () {
            if (isNullOrUndefined(content)){
                return ''
            }else {
                return this.content.split('\n').filter(l=>l.trim());
            }
        }
    }
    lines() {
        return this._lines()
    }
    get count() {
        return this.lines().length;
    }
    status() {
        return status(this._file_path)
    }
}

module.exports = FILE;

