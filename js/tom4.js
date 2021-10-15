//Глава 4
//
//JSON
//JSON.stringify([obj]) создание json из объекта
//JSON.parse(JSONObj) перевод из json в обычный объект
//JSON.parse(JSON.stringify([obj])) Полная копия объекта, со всеми вложенными элементами
//
//Отправка GET запроса
//JSON file:
//{"current":{"usd": 74}}
//Сначала в переменные заносятся элементы со страницы (input) и на один из них создается событие
//Параметры событий: change - смена фокуса, input - изменение значения в поле input 
//const request = new XMLHttpRequest(); Используем встроенный в браузер объект по общению с сервером
//request.open('GET', url, async, login, password); собирает настройки для последующих запросов
//1-метод(GET, POST ...), 2-ссылка на файл json(js/tom4.js), необязательные параметры: async-можно сделать синхронным,
//если нужна авторизация, то передаются еще Логин и Пароль
//request.setRequestHeader('Content-type', 'application/json; charset=utf-8') Добавляем параметры: кодировку и тип файла для передачи
//requset.send(arg); Передаются аргументы, которые загрузятся на сервер, у GET скобки пустые
//request.addEventListener('readystatechange', () => { Создаем событие на проверку состояния запроса, лучше использовать 'load',
    //это свойство сработает только тогда, когда запрос готов, готов не значит успешно выполнен
    //Нужно заменить request.addEventListener('load', ...... if(request.satus === 200){}
    //if(request.readyState === 4 && request.satus === 200){ Если сервер выполнил скрипт и страница все загрузила
        //console.log(request.response);
        //const data = JSON.parse(request.response);
        //inputUsd = (+inputRub.value / data.current.usd).toFixed(2); Расчет и округление до 2 знаков после точки
    //}
    //else{ Если что-то не так с запросом
        //inputUsd.value = "Что-то пошло не так";
    //}
//})
//
//Promise (try catch finaly)
//return new Promise(function(resolve, reject){ объявляем новое обещание
    //if(status == 200) resolve(response) если с сервера пришел норм ответ, то переходим дальше
    //error = new Error(statusText)
    //error.code = status
    //else reject(error) если ошибка, то переходим в блок catch
//});
//[func].then(response => {return new Promise}).then().catch(error).finaly()
//then(data => {}) Должна передаваться функция или создаваться стрелочная
//Promise.all([test(1000), test(2000)]).then(()=>{});
//В метод all передаются Промисы, и как только они все выполняться, произойдут действия описанные в then
//Promise.race([test(1000), test(2000)]).then(()=>{});
//В метод race передаются Промисы, и как только хотя бы один из них выполнится, то произодет действие описанное в then
//
//Fetch
//fetch('url', { создание fetch функции
    //method: "POST",  //если нужен GET, то эти все аргументы не нужны, хватит url
    //body: JSON.stringify({name: 'Alex'}), 
    //headets: {
        //'Content-type':'aplication/json'
    //}
//})
//.then(response => response.json()) метод json парсит строку, которая пришла от сервера
//.then(json => console.log(json)) теперь объект выводится в консоль
//
//
//Перебор массива
//foreach не создает новый массив
//
//filter фильтрует массив по какому-то критерию и создает новый
//const newNames = names.filter(function(name) {return name.length < 5;}) Имена, у которых длина меньше 5 символов, заносятся в новый массив
//
//map изменяет значение каждого элемента в массиве
//let answers = ['','','']; какой-то массив
//answers.map(item => item.toLowerCase()); перезаписываем массив переводя все элементы в нижний регистр
//Запись эквивалентна записи выше также используется колбэк функция
//
//some проверяет есть ли хотя бы один элемент, который подходит под требования, если есть, то возращает true
//arr.some(item => typeof(item) === 'number');
//
//every проверяет все элементы и если они подходят под условие, то возращает true
//arr.every(item => typeof(item) === 'number');
//
//reduce соединяет элементы массива в одно целое
//const arr = [1, 2, 3];
//const res = arr.reduce((sum, item) => sum + item, 3); в переменную res записывается сумма всех элементов массива arr
//первый аргумент -сумма, второй - каждый элемент массива, третий элемент не обязательный, в него передается начальное значение переменной sum 
//Также можно сложить строки
//...=>`${sum}, ${item}`;
//Интересный пример работы:
//const obj = {
    //ivan: 'persone',
    //ann: 'persone',
    //dog: 'animal',
    //cat: 'animal'
//};
//const newArr = Object.entries(obj) Преобразуем объект в массив массивов [['ivan', 'persone'], ['ann', 'persone']......]
//.filter(item => item[1] === 'persone') заносим в массив только тех, у кого второе значение в массиве равно person
//.map(item[0]); записываем в массив только первый элемент мини массива


