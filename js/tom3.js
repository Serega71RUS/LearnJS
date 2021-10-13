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
//
//