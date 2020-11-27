'use strict';

let arr = ['202', '457', '752', '244', '5687', '4789'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(arr[i]);
    }
}

for (let i = 2; i <= 100; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log(i + '. Делители этого числа: 1 и ' + i);
    }
}