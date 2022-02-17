const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);




const printProfileData = profileDataArr => {
    //WE LOSE THE () ABOVE AND CHANGE i++ TO i += 1
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }  
    
    console.log('================');

    //THE ABOVE IS THE SAME AS THE BELOW
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem) 
    });
};

printProfileData(profileDataArgs);