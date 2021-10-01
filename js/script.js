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

let numberOffilms;

const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// start();
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();
// showMyDB();

function start() {
  numberOffilms = +prompt(`Сколько фильмов вы уже посмотрели?`);
  while(numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) {
    numberOffilms = +prompt(`Сколько фильмов вы уже посмотрели?`);
  }
}

function rememberMyFilms() {
  for(let i = 0; i < 2; i++){
    let namemv = "", 
      mark = "";
    while(namemv.length == 0 || namemv.length > 50){
      namemv = prompt(`Один из последних просмотренных фильмов?`);
    }
    while(mark.length == 0){
      mark = prompt(`На сколько оцените его?`);
    }
    personalMovieDB.movies[namemv] = mark;
  }
}

function writeYourGenres() {
  for(let i = 0; i < 3; i++){
    let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
    while(genre == `` || genre == null ){
    genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
    personalMovieDB.genres[i] = genre;
  }
}

function detectPersonalLevel() {
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
}

function showMyDB() {
  if(personalMovieDB.privat == false){
    console.log(personalMovieDB);
  }
}