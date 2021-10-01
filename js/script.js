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
const str = `Hello hWorhld!`;
console.log(str.indexOf(`h`));
const numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for(let i = 0; i < 2; i++){
  let namemv = "", 
    mark = "";
  while(namemv.length == 0 || namemv.length > 50){
    namemv = prompt("Один из последних просмотренных фильмов?");
  }
  while(mark.length == 0){
    mark = prompt("На сколько оцените его?");
  }
  personalMovieDB.movies[namemv] = mark;
}

let i = 0;
while(i < 2){
  //.......
  i++;
}

i = 0;
do {
  //.......
  i++;
}while(i < 2);

if(personalMovieDB.count < 10){
  console.log(`Просмотрено довольно мало фильмов`);
}
else{
  if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log(`Вы классный зритель`);
  }
  else 
    if(personalMovieDB.count >= 30){
      console.log(`Вы киноман`);
    }
    else {
      console.log(`Произошла ошибка`);
    }
}

console.log(personalMovieDB);