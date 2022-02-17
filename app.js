//EDIT TO USE FS.WRITEFILE METHOD
const fs = require('fs');
//THIS IS A DESTINATION FILE TO RECEIVE THE LOCAL MODULE PAGE-TEMPLATE
const generatePage = require('./src/page-template.js');
//EDIT TO REMOVE THE (2, process.argv.length)- ONLY NEED (2) 
const profileDataArgs = process.argv.slice(2);


//ARRAY INDEX EXPRESSIONS with ES6 ASSIGNMENT DESTRUCTURING
const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
    //REVISED FROM if (err) throw err;
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

