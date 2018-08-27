'use strict';
const ERROR_MESSAGE = 'Ошибка! Логин должен быть от 4 до 16 символов';
const SUCCESSFULL_MESSAGE = 'Логин успешно добавлен!';
const ANOTHER_MESSAGE = 'Такой логин уже используется!';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => login.length >= 4 && login.length <= 16;
const isLoginUnique = (allLogins, login) => allLogins.includes(login);

function addLogin(logins, login) {
    if(!isLoginValid(login))
        return ERROR_MESSAGE;

    if(isLoginUnique(logins, login))
        return ANOTHER_MESSAGE;

    logins.push(login);
    return  SUCCESSFULL_MESSAGE;

}

console.log(addLogin(logins,'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'