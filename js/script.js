"use strict";
//alert
//confirm
//prompt
//= == ===
let numberOffilms;

const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);

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
  for(let i = 1; i <= 3; i++){
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10){
    console.log(`Просмотрено мало фильмов`);
  }
  else 
    if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
      console.log(`Вы классический зритель`);}
    else
      if(personalMovieDB.count >= 30){
        console.log(`Вы киноман`);
      }
      else{
        console.log(`Произошла ошибка`);
      }
}

function showMyDB(hidden) {
  if(!hidden){
    console.log(personalMovieDB);
  }
}