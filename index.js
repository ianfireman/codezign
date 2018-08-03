var inquirer = require('inquirer');
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'));

let rootPath = './';

var fs = require('fs');
if (fs.existsSync('./src')) {
    rootPath = './src';
} else {
    if (fs.existsSync('./app')) {
        rootPath = './app';
    }
}

inquirer.prompt([
    {
        type: 'fuzzypath',
        name: 'path',
        pathFilter: (isDirectory, nodePath) => isDirectory,
        // pathFilter :: (Bool, String) -> Bool
        // pathFilter allows to filter FS nodes by type and path
        rootPath: rootPath,
        // rootPath :: String
        // Root search directory
        message: 'Select a target directory for your component:',
        default: 'components/',
        suggestOnly: false,
        // suggestOnly :: Bool
        // Restrict prompt answer to available choices or use them as suggestions
    }
]);