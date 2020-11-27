'use strict';

const userString = function(arg) {

    return (typeof arg !== 'string') ? 'Переданный аргумент не является строкой' : (arg = arg.trim(),
        ((arg.length > 30) ? ((arg = arg.substr(0, 30)), (arg += '...')) : arg));

    // if (typeof arg !== 'string') {
    //     return 'Переданный аргумент не является строкой';
    // } else {
    //     arg = arg.trim();
    //     if (arg.length > 30) {
    //         arg = arg.substr(0, 30);
    //         arg += '...';
    //     }
    //     return arg;
    // }
}

console.log(userString('  Длина1Длина2Длина3Длина4Длина5Длина6Длина7    '));