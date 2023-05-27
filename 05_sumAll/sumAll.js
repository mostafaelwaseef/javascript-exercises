const sumAll = function(lower,upper) {
    let sum = 0;
    let low;
    let up;
    if ( !Number.isInteger(lower) || !Number.isInteger(upper)){
        return "ERROR"
    }
    if( lower < upper ){
        low = lower;
        up = upper;
    }
    else if ( lower > upper ){
        low = upper;
        up = lower;
    }
    for (low; low <= up; low++) { 
        if ( low < 0 || up < 0 ){
            sum = "ERROR";
            break;
        } 
        else {
            sum = sum + low;
        }  
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
