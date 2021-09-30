"use strict";
//alert
//confirm
//prompt
//= == ===
const numberOffilms = prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for(let i = 0; i < 2; i++){
  const namemv = prompt("Один из последних просмотренных фильмов?");
  const mark = prompt("На сколько оцените его?");
  personalMovieDB.movies[namemv] = mark;
}

console.log(personalMovieDB);