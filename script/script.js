let num = 266219;
let a = 1;

while (num !== 0) {
    let b = num % 10;
    a *= b;
    num = Math.floor(num / 10);
}

a = a ** 3;
let b = a;
console.log(a);
num = 0;
while (a !== 0) {
    a = Math.floor(a / 10);
    num++;
}

num -= 2;
num = 10 ** num;
b = Math.floor(b / num);
console.log(b);