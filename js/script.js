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
//[array].push([elem]) добавить элемент в конец массива
//[array].pop([elem]) удалить последний элемент из массива
//[array].indexOf(elem) возвращает номер первого найденного элемента в массиве
//[array].split([razd]) делает из строки массив, разделитель
//[array].join([razd]) делает из массива строку, разделитель
//delete.[array][n] удаление n-ного элемента из массива
//[array].splice(index, count, elem1) заменять count элементов в массиве, начиная с index, на elem1
//[array].slice(begin, end) копирует часть массива с begin до end, end не включая, если без аргументов, то копируется весь массив
//[array].sort(func) соритровка массива, если не передать func, то сортирует элементы как строки
//[array].reverse() меняет порядок элементов на обратный
//копиирование объектов (поверхносное копирование):
//1. создать функцию с перебором for in
//2. соединение двух объектов: const newObj = Object.assign({}, oldObj);
//3. const newArray = oldArray.slice();
//4. const newArray = [...oldArray]; const newObj = {...OldObj};
//ООП
//Прототипно-ориентированное наследование:
//Object.setPrototypeOf(john, solider); Объекту john присваиваем прототип solider
//const john = Object.create(solider); Создаем объект john, который является прототипом от объекта solider

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
      console.log(`Любимый жанр #${personalMovieDB.genres.indexOf(element)+1}, - это ${element}`)
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