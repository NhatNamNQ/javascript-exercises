const removeFromArray = function(array = [], ...number) {
    const filterArray = array.filter(x => !number.includes(x))
    return filterArray;
};

// Do not edit below this line
module.exports = removeFromArray;
