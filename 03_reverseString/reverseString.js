const reverseString = function(value) {
    let reservedStr = '';
    for (let index = value.length; index >= 0; index--) {
        reservedStr += value.charAt(index);
    }
    return reservedStr;

    //return value.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
