const { isNullOrUndefined } = require("util");
const { EOL }= require('os');

class FILE {
    constructor(content = null) {
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
}

module.exports = FILE;

