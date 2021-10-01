"use strict";
//alert
//confirm
//prompt
//= == ===
//for, while(условие)[действия,], do[действия]while(условие)
//function [name]([arg1, arg2]) {....} Используется везде
//const(let) [name] = function([arg1, arg2]) { return ....}; После объявления
//const(let) [name] = (arg, arg2) => { return .....}; 
//[string].slice([a],[b]); Вырезание из строки от a до b (возможны отрицательные значения(-6, -1), идет отсчет с конца строки)
//[string].substring([a],[b]); Вырезание из строки от a до b
//[string].substr([a],[b]); Вырезание из строки от a b кол-во символов
//[string].indexOf(`a`); Получение индекса первого совпадающего элемента `a` в строке
//[string].toUpperCase(); Строку в верхний регистр
//[string].toLowerCase(); Строку в нижний регистр
//[string].[i] получение значения i-того элемента в строке
//Math.round([число]) Округление числа
//parseInt([string]) Преобразование числа из строки в Int
//parseFloat([string]) Преобразование числа из строки в Float
//function CaBa(arg1, callback){callback();}
//function func1(){};
//CaBa(arg1, func1);

const USADB = {
  country: `USA`,
  states: [`California`, `Nevada`, `Arizona`,`New Mexico`],
  cites: [`Los Angeles`, `Carlsbad`, `Reno`, `Artisia`,`Tycson`,`Santa Fe`, `San Diego`, `Las Vegas`, `Carson City`, `Phoenix`],
  timeBelt: `-8 UTC`,
  Ford: {
    Fiesta:2015,
    Focus:2017,
    Mustang:2019
  },
  CalifCityPrint: function() {
    console.log(`${this.states[0]} cites: ${this.cites[0]}, ${this.cites[1]}, ${this.cites[6]}`);
  },
  NevadaCityPrint: function() {
    console.log(`${this.states[1]} cites: ${this.cites[2]}, ${this.cites[7]}, ${this.cites[8]}`);
  },
  ArizonaCityPrint: function() {
    console.log(`${this.states[2]} cites: ${this.cites[4]}, ${this.cites[9]}`);
  },
  NewMexicoPrint: function() {
    console.log(`${this.states[3]} cites: ${this.cites[3]}, ${this.cites[4]}, ${this.cites[5]}`);
  }
};

console.log(Object.keys(USADB));
console.log(Object.keys(USADB).length);
USADB.CalifCityPrint();
USADB.NevadaCityPrint();
USADB.ArizonaCityPrint();
USADB.NewMexicoPrint();
const {Fiesta, Focus, Mustang} = USADB.Ford;
console.log(`Fiesta:${Fiesta}`);
console.log(`Focus:${Focus}`);
console.log(`Mustang:${Mustang}`);