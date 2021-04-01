'use strict';

let money = prompt('Ваш бюджет на месяц?',''),
time = prompt('Введите дату в формате YYYY-MM-DD');


let appData = {
    budget:money,
    timeData:time,

 

    optionalExpsens:{},
    income:[''],
    savings:false,

}




alert((money / 24) )