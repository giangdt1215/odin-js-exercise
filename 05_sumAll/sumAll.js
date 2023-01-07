const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b))
        return 'ERROR';
    if(a < 0 || b < 0)
        return 'ERROR';

    if(b < a){
        let tmp = a;
        a = b;
        b = tmp;
    }

    let sum = 0;
    for (let index = a; index <= b; index++) {
        sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
