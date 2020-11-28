'use strict';

let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let date = new Date(),
    today = date.getDay();
for (let item in daysOfWeek) {
    if ((daysOfWeek[item] === 'Суббота' || daysOfWeek[item] === 'Воскресенье') && +item !== today) {
        document.getElementById('text').innerHTML += '<em>' + daysOfWeek[item] + '</em>' + '<br>';
    } else if (+item === today) {
        document.getElementById('text').innerHTML += '<strong><em>' + daysOfWeek[item] + '</em></strong>' + '<br>';
    } else {
        document.getElementById('text').innerHTML += daysOfWeek[item] + '<br>';
    }
}