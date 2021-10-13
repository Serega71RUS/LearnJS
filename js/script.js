"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function() {
    personalMovieDB.count = +prompt(`Сколько фильмов вы уже посмотрели?`);
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt(`Сколько фильмов вы уже посмотрели?`);
    }
  },

  rememberMyFilms: function() {
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
  },

  writeYourGenres: function() {
    for(let i = 0; i < 3; i++){
      let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
      while(genre == `` || genre == null ){
      genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
      }
      personalMovieDB.genres[i] = genre;
    }

    personalMovieDB.genres.forEach(element => {
      console.log(`Любимый жанр ${personalMovieDB.genres.indexOf(element+1)}, - это ${element}`);
      //console.log(`Любимый жанр ${personalMovieDB.genres.indexOf(element)+1}, - это ${element}`);
    });

    // personalMovieDB.genres.forEach((item, i) => {
    //   console.log(`Любимый жанр #${i+1}, - это ${item}`);
    // });

    // for(let i = 0; i < 2; i++)
    // {
    //   let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
    //   if(genres == `` || genres == null) {
    //     console.log(`Вы ввели некорректные данные или не ввели вовсе`);
    //     i--;
    //   }
    //   else{
    //     personalMovieDB.genres = genres.split(`, `);
    //     personalMovieDB.genres.sort();
    //   }
    // }

  },

  detectPersonalLevel: function() {
    if(personalMovieDB.count < 10){
      console.log(`Просмотрено довольно мало фильмов`);
    }
    else{
      if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log(`Вы классический зритель`);
      }
      else 
        if(personalMovieDB.count >= 30){
          console.log(`Вы киноман`);
        }
        else {
          console.log(`Произошла ошибка`);
        }
    }
  },

  showMyDB: function() {
    if(personalMovieDB.privat == false){
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    }
    else{
      personalMovieDB.privat = true;
    }
  }
};

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();