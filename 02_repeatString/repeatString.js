const repeatString = function(string, number) {
    let totalString ='';
    if (number < 0)
        return "ERROR";
    for (let i = 0; i < number; i++) {
        totalString += string;
    }
    return totalString;
};

// Do not edit below this line
module.exports = repeatString;
