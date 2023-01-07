const leapYears = function(year) {
    if(!Number.isInteger(year) || year < 0)
        return "ERROR";
    
    if(year % 400 == 0)
        return true;
    if(year % 4 == 0 && year % 100 != 0)
        return true

    return false;
};

// Do not edit below this line
module.exports = leapYears;
