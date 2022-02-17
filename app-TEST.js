const profileDataArgs = process.argv.slice(2, process.argv.length);


//ARRAY INDEX EXPRESSIONS with ES6 ASSIGNMENT DESTRUCTURING
const [name, github] = profileDataArgs;


//MULTILINE TEMPLATE LITERALS - USE CURLY BRACKS AND RETURN with a BACKTICK CLOSE WITH BACKTICK SEMICOLON
const generatePage = (userName, githubName) => {
    return `
        Name: ${userName}
        Github: ${githubName}
    `;
};

//EDIT TO PRINT RETURN W/ 2 VARS AS ARGUMENTS
console.log(name, github)
console.log(generatePage(name, github));


