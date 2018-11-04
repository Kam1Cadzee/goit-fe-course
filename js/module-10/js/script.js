'use strict';


const addBtn = document.querySelector(".js-add");
const REF = 'https://test-users-api.herokuapp.com/users/';
element('.js-get-all').addEventListener('click', e => {
    getAllUsers();
e.preventDefault();
});
element('.js-add').addEventListener('click', e => {
    let name = element('#name');
let age = element('#age');

addUser(name.value, age.value);

name.value = '';
age.value = '';

e.preventDefault();
});
element('.js-update').addEventListener('click', e => {
    const id = element('#id_user');
const input_name = element('#old_name');
const input_age = element('#old_age');
const user = {
    name: input_name.value,
    age: input_age.value
};

updateUser(id.value, user);

id.value = '';
input_name.value = '';
input_age.value = '';

e.preventDefault();
});
element('.js-remove').addEventListener('click', e => {
    const input_id = element('#id_remove_user');

removeUser(input_id.value);

input_id.value = '';
e.preventDefault();
});
element('.js-get').addEventListener('click', e => {
    const input_id = element('#id_get_user');
getUserById(input_id.value);
input_id.value = '';
e.preventDefault();
});
element('.js-clear').addEventListener('click', e => {
    element('tbody').innerHTML = '';
e.preventDefault();
});

function getAllUsers() {
    fetch('https://test-users-api.herokuapp.com/users/')
        .then(response => {
        if(response.ok) return response.json();

    throw new Error(response.statusText);

})
.then(data => {

        let tbody = element('tbody');

    let str = '';
    data.data.forEach(user => {
        let tr = createUser(user);
    str += tr;

});
    tbody.innerHTML = str;
})
.catch(eror => log(eror));


}
function createUser(user) {
    return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td></tr>`
}
function addUser(name, age) {

    fetch(REF, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            age: age
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }}).then(response => response.json())
.then(data => {
        data = data.data;
    element('.action').innerHTML = `Новый пользователь. Id: ${data._id}, Name: ${data.name}, Age: ${data.age}`;
})
.catch(error => log(error));

}

function updateUser(id, user) {
    fetch(REF + id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
.then(data => {
        data = data.data;
    element('.action').innerHTML = `Пользователь обновлен. Id: ${data._id}, Name: ${data.name}, Age: ${data.age}`;
})
.catch(error => log(error));
}

function removeUser(id) {
    fetch(REF + id, {
        method: 'DELETE'
    }).then(() => {
        element('.action').innerHTML = `Пользователь c Id: ${data._id}, удален`;
})
.catch(error => log('Error: ' + error));

}

function getUserById(id) {
    fetch(REF + id).then(response => response.json())
.then(data=>{
        element('tbody').innerHTML = createUser(data.data);

})
.catch(error => log('Error: ' + error));
}