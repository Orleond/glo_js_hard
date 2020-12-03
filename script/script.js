'use strict';

const setHoursText = function(n) {
        if (n === 1 || n === 21) {
            return 'час';
        } else if ((n > 1 && n < 5) || n > 21) {
            return 'часа';
        } else {
            return 'часов';
        }
    },
    setMinuteText = function(n) {
        if ((n < 2 || n > 20) && (n % 10 === 1)) {
            return 'минута';
        } else if ((n < 10 || n > 20) && ((n % 10 > 1) && (n % 10 < 5))) {
            return 'минуты';
        } else {
            return 'минут';
        }
    },
    setSecondText = function(n) {
        if ((n < 2 || n > 20) && (n % 10 === 1)) {
            return 'секунда';
        } else if ((n < 10 || n > 20) && ((n % 10 > 1) && (n % 10 < 5))) {
            return 'секунды';
        } else {
            return 'секунд';
        }
    },
    correctNumber = function(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return n;
        }
    };

let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    monthes = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
        'Сентября', 'Октября', 'Ноября', 'Декабря'
    ];
setInterval(function() {
    let date = new Date(),
        today = date.getDay(),
        day = date.getDate(),
        month = date.getMonth(),
        monthText = monthes[month],
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        hoursText = setHoursText(hour),
        minutesText = setMinuteText(minute),
        secondsText = setSecondText(second);
    for (let item in daysOfWeek) {
        if (+item === today) {
            today = daysOfWeek[item];
        }
    }


    document.querySelector('#text').innerHTML = 'Сегодня ' + today + ', ' + day + ' ' +
        monthText + ' ' + year + ' года., ' + hour + ' ' + hoursText + ' ' +
        minute + ' ' + minutesText + ' ' + second + ' ' + secondsText + "<br><br><br>";



    document.querySelector('#text').innerHTML += correctNumber(day) + '.' + correctNumber(month) + '.' +
        correctNumber(year) + ' - ' + correctNumber(hour) + ':' + correctNumber(minute) + ':' + correctNumber(second);
}, 1000);