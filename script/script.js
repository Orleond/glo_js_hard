let lang = 'en';
let daysRu = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let daysEn = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';

if (lang === 'ru') {
    console.log(daysRu);
} else {
    console.log(daysEn);
}

switch (lang) {
    case 'ru':
        console.log(daysRu);
        break;
    case 'en':
        console.log(daysEn);
}

let arr = new Map([
    ['ru', 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    ['en', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
]);
console.log(arr.get(lang));

let namePerson = 'Максим';

console.log((namePerson === 'Артем') ? 'Директор' : (namePerson === 'Максим') ? 'Преподаватель' : 'Студент');