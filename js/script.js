"use strict";
//alert
//confirm
//prompt
//= == ===
let numberOffilms = prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
  count: numberOffilms,
  movies: {

  },
  actors: {

  },
  genres: [

  ],
  privat: false
};

for(let i = 0; i < numberOffilms; i++){
  let namemv = prompt("Один из последних просмотренных фильмов?");
  let mark = prompt("На сколько оцените его?");
  personalMovieDB.movies[namemv] = mark;
}

console.log(personalMovieDB.movies);