//Глава 4
//
//JSON
//JSON.stringify([obj]) создание json из объекта
//JSON.parse(JSONObj) перевод изи json в обычный объект
//JSON.pare(JSON.stringify([obj])) Полная копия объекта, со всеми вложенными элементами
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



