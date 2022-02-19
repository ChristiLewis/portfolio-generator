//ADD NPM
const inquirer = require('inquirer');
//console.log(inquirer);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

///EDIT TO USE FS.WRITEFILE METHOD
//const fs = require('fs');
///THIS IS A DESTINATION FILE TO RECEIVE THE LOCAL MODULE PAGE-TEMPLATE
//const generatePage = require('./src/page-template.js');
///EDIT TO REMOVE THE (2, process.argv.length)- ONLY NEED (2) - REMOVE const profileDataArgs = process.argv.slice(2);
///ARRAY INDEX EXPRESSIONS with ES6 ASSIGNMENT DESTRUCTURING const [name, github] = profileDataArgs; REPLACED WITH INQUIRER
//const pageHTML = generatePage(name,github);

//fs.writeFile('./index.html', generatePage(name, github), err => {
    ///BACK TO if (err) throw err; REMOVE if (err) throw new Error(err);
    //if (err) throw err;

    //console.log('Portfolio complete! Check out index.html to see the output!');
//});

