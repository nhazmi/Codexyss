"use strict";
const inputUsername = document.getElementById('input1');
const inputPassword = document.getElementById('input2');
const validUsername = ['nabilhazmi','aisya','balqis'];
const validPassword = ['720530','4flat'];

document.addEventListener('keydown', function (event) {
    if(event.key === 'Enter'){
        const username = inputUsername.value;
        const password = inputPassword.value;
        const request = checkIndex(username,password);
        const condition = processing(request,username,password)
        console.log(index)
        window.alert('wait checking for credential')
        openPage(condition)
        
    }
    else return 
});

function checkIndex(username,password) {
    if (validUsername.includes(username) && validPassword.includes(password)) {
        window.alert('successful')
        return validUsername.findIndex(function(user){
            return user === username
        })
    }
    else
        console.log(username)
        console.log(password)
        window.alert('sorry not allowed')
        return 
}

function processing(index,username,password){
    if(validUsername[index].includes(username) && validPassword[index].includes(password)){
        return 'allowed'
    }
    else return
}

function openPage(condition) {
    if (condition) {
        window.open('https://nhazmi.github.io/Codexyss/Fiver%20Portfolio/Html/HomePage.html');
    }
    else return
}
