"use strict";
//alert
//confirm
//prompt
//= == ===
//for, while(условие)[действия,], do[действия]while(условие)
const numberOffilms = prompt("Сколько фильмов вы уже посмотрели?");
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
  if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log(`Вы классный зритель`);
  }
  else{
    console.log(`Вы киноман`);
  }
}

console.log(personalMovieDB);