const repeatString = function(str, num) {
    if (num === 0) {
        return "";
    } else if (num === 1) {
        return str
    } else if (num < 0){
        return 'ERROR';
    } else if (num > 0) {
        return str + repeatString(str, num - 1);
    } else if (num = Math.floor(Math.random() * 1000)) {
        return str + repeatString(str, num - 1)
    } else if (str = '' && num > 0) {
        return str + repeatString(str, num - 1);
    }
};

// Do not edit below this line
module.exports = repeatString;
