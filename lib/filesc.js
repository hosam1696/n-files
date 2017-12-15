const {resolvePath} = require("../utils/stairs");
const {readP, isExist, dirFiles, status} = require('../utils/utilspromise');
const {join} = require('path');

const FILE = require('./filec');

class NODEFILES {
    /**
     * read and prints the content of the file.
     *
     * @public
     * @param {string} filename the filename we want to read.
     * @param {Object} object={} options of reading.
     * @returns {promise} Returns `Promise{FILE}`.
     */
    read(filename, options) {
        let filePath = resolvePath(filename);
        return readP(filePath, {...options,...{encoding: 'utf8'}})
            .then(content => new FILE(filePath, content))
            .catch(err => handleErr(err))
    }

    isExists(filename) {
        return isExist(filename);
    }

    /**
     * read all file and directories on specific folder.
     *
     * @public
     * @param {string} directory the directory we want to read.
     * @param {Object} object={} options of reading.
     * @returns {promise:array} Returns `Promise<Array<string>>`.
     */
    inDir(directory, options = {}) {
        return dirFiles(resolvePath(directory), options).catch(err => handleErr())
    }
    
    /**
     * get just files in specific directory.
     *
     * @public
     * @param {string} directory the directory we want to read.
     * @param {Object} object={} options of reading.
     * @returns {promise:array} Returns `Promise<Array<string>>`.
     */
    async filesInDir(directory = '.', options = {}) {
        let dirPath = resolvePath(directory, options);
        let allInFiles = await this.inDir(dirPath);
        let files = [];
        for (let file of allInFiles) {
            if ((await status(this.joinPaths(dirPath, file))).isFile())
                files.push(file)
        }
        return files
    }

    joinPaths(...paths) {
        return join(...paths)
    }

}

function handleErr(err) {
    throw new Error('Error in path:', err);
    process.exit(0);
}

module.exports = new NODEFILES();