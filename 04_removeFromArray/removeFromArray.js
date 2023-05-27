const removeFromArray = function(array, ...arg) {
    let newArray = [];
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < arg.length; j++) {
           if ( array[i] === arg[j]){
           flag = true;
           } 
        }
        if ( flag == false){
            newArray.push(array[i]);
        }
        flag = false;       
    };
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
