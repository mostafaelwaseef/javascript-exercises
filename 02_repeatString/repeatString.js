const repeatString = function(word,num) {
    if (num < 0){
        return "ERROR";
    }
    let string = "";
    for (let index = 0; index < num; index++) {
        string += word;       
    }
    return string;

};

// Do not edit below this line
module.exports = repeatString;
