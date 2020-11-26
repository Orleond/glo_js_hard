'use strict';

const userString = function(arg) {

    return (typeof arg !== 'string') ? 'Переданный аргумент не является строкой' : (arg = arg.trim(),
        ((arg.length > 30) ? ((arg = arg.substr(0, 30)), (arg += '...')) : arg));

};

console.log(userString(1));