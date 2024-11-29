const sumAll = function(beginNumber, endNumber) {
    if (beginNumber < 0 || endNumber < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(beginNumber) || !Number.isInteger(endNumber)) {
        return "ERROR";
    }
    let sum = 0;

    if (beginNumber > endNumber) {
        let tmp = beginNumber;
        beginNumber = endNumber;
        endNumber = tmp;
    }

    for (let i = beginNumber; i <= endNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
