//alert
//confirm
//prompt
//= == ===
//for, while(условие)[действия,], do[действия]while(условие)
//[array].forEach(item, poryadNum, ssilka) => {};
//function [name]([arg1, arg2]) {....} Используется везде
//const(let) [name] = function([arg1, arg2]) { return ....}; После объявления
//const(let) [name] = (arg, arg2) => { return .....}; 
//
//[string].slice([a],[b]); Вырезание из строки от a до b (возможны отрицательные значения(-6, -1), идет отсчет с конца строки)
//[string].substring([a],[b]); Вырезание из строки от a до b
//[string].substr([a],[b]); Вырезание из строки от a b кол-во символов
//[string].indexOf(`a`); Получение индекса первого совпадающего элемента `a` в строке
//[string].toUpperCase(); Строку в верхний регистр
//[string].toLowerCase(); Строку в нижний регистр
//[string].[i] получение значения i-того элемента в строке
//
//Math.round([число]) Округление числа
//Math.floor([число или выражение]) Округление числа до ближайшего целого(отбрасывает хвост)
//i ** 3 Возвести в 3 степень
//parseInt([string]) Преобразование числа из строки в Int
//parseFloat([string]) Преобразование числа из строки в Float
//
//function CaBa(arg1, callback){callback();}
//function func1(){};
//CaBa(arg1, func1);
//
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
//
//копиирование объектов (поверхносное копирование):
//1. создать функцию с перебором for in
//2. соединение двух объектов: const newObj = Object.assign({}, oldObj);
//3. const newArray = oldArray.slice();
//4. const newArray = [...oldArray]; const newObj = {...OldObj};
//
//ООП
//Прототипно-ориентированное наследование:
//Object.setPrototypeOf(john, solider); Объекту john присваиваем прототип solider
//const john = Object.create(solider); Создаем объект john, который является прототипом от объекта solider
//Dynamic Type
//To String: 1) String([elem]); 2) [elem] + '';
//To Number: 1) Number([elem]); 2) +[elem]; 3) parseInt([elem], 10); 10 - десятичная система; 
//To Boolean: false: 0, '', null, undefined, NaN; 1) if([elem]){}; 2) Boolean([elem]); 3) !![elem];
//И запинается на лжи
//ИЛИ запинается на правде
//
//Получение элементов со страницы:
//1)document.getElementById('id'); Вывод элемента с определенным id
//2)document.getElementByTagName('button'); Вывод всех элементов в псевдомассив
//3)document.getElementByClassName('class'); Вывод всех элементов в псевдомассив
//4)wrapper = document.querySelectorAll('.class'); Вывод всех элементов в псевдомассив с методом forEach
//5)document.querySelector('.class'); Вывод первого совпавшего элемента .class #id
//6)hearts = wrapper.querySelectorAll('.class'); Не обязательно обращаться ко всему документу для получения определенных элементов
//
//Применение стилей
//[box].style.backgroundColor = 'blue'; Изменение одного свойства в элементе 
//[box].style.cssText = 'background-color: blue; width: 500px'; Изменение нескольких свойств в элементе
//[class][0].style..... При обращении к классу необходимо указать номер элемента в массиве
//hearts.forEach(item => {item.backgroundColor = '#ccc'}); Добавление свойства в несколько элементов в псевдомассивах
//const div = document.createElement('div'); Создание элемента 
//div.classList.add('black'); Добавление к элементу класса black
//wrapper.append(div); Добавить элемент div в конец псевдомассива wrapper
//wrapper.prepand(div); Добавить элемент div в начало псевдомассива wrapper
//hearts[0].before(div); Добавить элемент div перед элементом hearts[0]
//hearts[0].after(div); Добавить элемент div после элемента hearts[0]
//hearts[0].remove(); Удаление элемента
//hearts[0].replaceWith(circles[0]); Замена hearts на circles
//div.innerHTML = '<h1>hello</h1>'; Добавление html кода на страницу
//div.textContent = 'Hello'; Добавление текста на страницу
//div.insertAdjacentHTML('prpertie', '[html code]'); Свойство когда добавлялть: перед началом/перед концом/после начала/после конца
//
//События
//cons btn = document.querySelector('button'); Нужен элемент, на который будем вешать событие
//btn.addEventListener('click', (event, other elements) => {}); Создание обработчика событий, event-описывает, что прозошло с элементом
//e.target вывести элемент html
//btn.removeEventListener('click', [callback function]deleteElem); deleteElem - функция объявленная ранее
//e.currentTarget вызов конкретного элемента
//event.preventDefault(); Отмена стандартных действий, достпных в браузере
//btns.forEach(btn => {btn.addEventLisntener('click', deleteElem, {once: true})}); Конструкция для присвоения события к нескольким элементам
//{once: true} аргумент, который говорит, что нужно выполнить событие только один раз
//
//Навигация по DOM
//document.documentElement получение полной html страницы
//document.head получь содержимое элемента head
//document.body.childNodes получение узлов-детей элемента body
//for(let node of document.body.childNodes){
  //if(node.nodeName == '#text'){
      //continue;
  //} Цикл, который оставляет одни элементы и убирает узлы
//} 
//document.body.firstChild получение первого узла-ребенка
//document.body.firstElementChild получение первого элемента-ребенка
//document.body.lastChild получение последнего узла-ребенка
//document.body.lastElementChild получение последнего элемента-ребенка
//document.querySelector('#id').parentNode получение родителя-узла относительно ребенка(поиск ребенка по id)
//document.querySelector('#id').parentElement получение родителя-элемента относительно ребенка(поиск ребенка по id)
//<li data-current="3">3</li> data-[any text] оставление меток, для последующего ориентирования в html документе
//document.querySelector('[data-current="3"]') обращение к этой метке 
//document.querySelector('[data-current="3"]').nextSibling получение следующего соседа-узла относительно метки
//document.querySelector('[data-current="3"]').nextElementSibling получение следующего соседа-элемента относительно метки
//document.querySelector('[data-current="3"]').previousSibling получение предидущего соседа-узла относительно метки 
//document.querySelector('[data-current="3"]').previousElementSibling получение предидущего соседа-элемента относительно метки
//
//События на мобилках
//touchstart Палец прикоснулся к объекту
//touchmove Палец двигается в пределах объекта
//touchend Палец отпустил объект
//touchenter Срабатывает, как только палец зашел за пределы элемента
//touchleave Срабатывает, как только палец вышел за пределы элемента
//touchcancel Срабатывает, как только палец вышел за пределы страницы
//Свойства
//touches Получить количество пальцев, не важно где находятся
//targetTouches Получить количество пальцев, которые косаются именно этого объекта
//changedTouches Список пальцев, учавствующих в текущем событии
//
//Async, defer, параллельная загрузка скриптов
//<script defer src="js/script.js"> Загрузка скрипта параллельно, если несколько, то загружаются последовательно, ждет DOM-дерево
//<script async src="js/script.js"> Загрзка скрипта параллельно, никого не ждет, как загрузился, сразу выполняется
//Создание функции для загрузки скриптов
//function loadScript(src) {
  //const script = document.CreateElement('script');
  //script.scr = src;
  //script.async = false; Созданные скрипты автоматически загружаются параллельно и никого не ждут
  //document.body.append(script);
//}
//
//
//Глава 3
//
//ClassList, Делегирование событий
//btns - псевдомассив
//btns[0].classList.add('red', 'blue'); Добавление CSS класса red в первую кнопку; Можно передавать несколько параметров
//btns[0].classList.remove('red'); Удаление CSS класса red из первой кнопки
//btns[0].classList.toggle('red'); Добавление CSS класса red в первую кнопку и удаление, если он есть
//if(btns[0].classList.contains('red')){} Проверка, есть ли CSS класс red в первой кнопке
//Реализация выпадающего меню при нажатии на кнопку
//btns[0].addEventListener('click', () => {
  //if(!btns[1].classList.contains('red')){ Если у кнопки нет класса red
    //btns[1].classList.add('red'); Добавляем класс red
  //}
  //else{ Иначе, если этот класс у нее есть
    //btns[1].classList.remove('red'); Удаляем класс red из кнопки
  //}
//});
//btns[1].classList.toggle('red'); 
//
//Таймеры
//setTimeout(function, timems) Запускать функцию через timems один раз
//const timerID = setInterval(function, timems) Запускать функцию через timems пока не остановят
//clearInterval(timerID) Передается название таймера
//Создание нормального таймера вручную
//let id = setTimeout(function log(){
  //console.log(); Действия в таймере
  //id = setTimeout(log, 500); Рекурсивный вызов таймера снова
//}, 500);
//
//Работа с датой
//const now = new Data(); получение текущей даты и времени системы
//const now = new Data('2021-05-21'); Передача определенной даты
//const now = new Data(2021, 05, 21, 20); Передача определенной даты 
//год, месяц, день, час, минуты, секунды, милисекунды
//отсчет начинается с 1970-01-01-00-00-00
//Чтобы получить дату раньше 1970, можно передать кол-во милисекунд но со знаком -
//now.getFullYear() Получить год 2021
//now.getMonth() Получить месяц 9; 0-11
//now.getDate() Получить день 1-31
//now.getDay() Получить день недели 0-6 0-вс 6-сб
//now.getHours() Получить час по местному времени
//now.getUTCHours() Получить час по Гринвичу
//now.getTimezoneOffset() Получить разницу во времени между локальным часовым поясом и Гринвичем; выводится в минутах, может быть отрицательным
//now.getTime() Получение кол-ва милисекунд начиная с 1970 
//get можно заменить на set и задать дату
//
//Работа с прокруткой на странице
//const box = document.querySelector('.box');
//box.scrollTop Сколько px пользователь пролестал вверх, работает для элементов, можно изменить
//box.getBoundingClientRect() Получение координат и размеров объекта относительно верхнего левого угла
//windows.getComputedStyle(box) Получение всех размеров и свойств объекта. Изменить нельзя
//document.documentElement.scrollTop Сколько px пользователь пролестал вверх, работает для страницы, можно изменить
//window.scrollBy(x, y) Скролит на y px вниз относительно текущего положения
//window.scrollTo(x, y) Скролит на y px вниз относительно начала документа; можно сделать стрелку "Вверх"
//
//This
//Функция конструктор:
//function User(name, id) {
  //this.name = name,
  //this.id = id,
  //this.human = true,
  //this.hello = function() {
    //console.log(`Hello ${this.name}`)
  //};
//}
//
//function sayName(surname) {
  //console.log(this);
  //console.log(this.name + surname);
//}
//const user = {
  //name: 'John'
//}
//sayName.call(user, 'Smith', ..., ...); Идет передача аргументов через ,
//sayName.apply(user, ['Smith', ..., ...]) Идет передача аргументов в виде массива
//
//function count(num){ 
  //return this*num; функция удваивания числа
//}
//const double = count.bind(2); bind создает новую функцию из двух других
//console.log(double(3));
//Пример стрелочной функции в одну строчку
//const double = (a) => a*2;
//1) Обычная функция: this = windows, но если стоит use strict, то будет undefined
//2) Контекст у методов объекта это будет сам объект
//3) this в конструкторах и классах это новый экземаляр объекта
//4) Ручная привязка this: call, apply, bind
//Если обработчик события написан в классическом режиме('click', function(){}), то контекст вызова будет возвращать сам элемент
//на котором происходит событие; как event.target
//У стрелочной функции нет своего контекста вызова, она его возьмет у родителя
//
//Class
//class Name {
  //constructor(height, width) { Создание конструктора
  //this.height = height;
  //this.width = width;
  //
  //calcArea() { Метод в классе
      //return this.height * this.width;
    //}
  //}
//}
//const square = new Name(10, 10);
//console.log(square.calcArea());
//class NewName extands Name { наследование класса
  //constructor(height, width, text, bgColor) {
    //super(height, width); Вызвает строки конструктора родителя; super должна быть на первом месте в конструкторе, 
      //в скобках прописываются свойства из конструктора родителя, которые будут нужны
    //this.text = text;
    //this.bgColor = bgColor;
    //
    //showMyProps() {
      //console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    //}
  //}
//}
//const div = new NewName(25, 10, 'Hello World!', 'red'); Объявляем элемент класса
//div.showMyProps(); вызываем метод
//console.log(div.calcArea());
//
//Если неизвестно, сколько может быть дополнительных аргументов в функции, то используется оператор rest
//function log (a, b, ...rest) пример, a и b передаются всегда, а в rest передаются все остальные переменные и собираются в массив

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