//EDIT TO USE FS.WRITEFILE METHOD
const fs = require('fs');

//EDIT TO REMOVE THE (2, process.argv.length)- ONLY NEED (2) 
const profileDataArgs = process.argv.slice(2);


//ARRAY INDEX EXPRESSIONS with ES6 ASSIGNMENT DESTRUCTURING
const [name, github] = profileDataArgs;


//MULTILINE TEMPLATE LITERALS - USE CURLY BRACKS AND RETURN with a BACKTICK CLOSE WITH BACKTICK SEMICOLON
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};


fs.writeFile('./index.html', generatePage(name, github), err => {
    //REVISED FROM if (err) throw err;
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

