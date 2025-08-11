const btn = document.querySelector(".btn");
const passwordTxt = document.querySelector(".passwordTxt");
const max = 16;
const characters = [
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
  "a", "s", "d", "f", "g", "h", "j", "k", "l",
  "z", "x", "c", "v", "b", "n", "m",

  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "Z", "X", "C", "V", "B", "N", "M",

  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",

  "!", "?", "%", "/", "£", "€", "&", "(", ")", "=", "'", "+", "-", "*", ",", ".", ";", ":", "_", "@", "#", "$", "^"];

function getSecureIndex(n){
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % n;
}

function getPassword(){
    let password = "";
    for(let i = 0; i < max; i++){
        let index = getSecureIndex(characters.length) ;
        password += characters[index];
    }
    return password;
}

function start(){
    passwordTxt.innerHTML = getPassword();
}

btn.addEventListener("click", start);

/*
Using Math.Random()

function getPassword(){
    let password = "";
    for(let i = 0; i < 16; i++){
        let n = Math.floor(Math.random() * characters.length);    
        console.log(characters[n]);
        password += characters[n];
    }
    return password;
}

function start(){
    passwordTxt.innerHTML = getPassword();
}

btn.addEventListener("click", start);
*/


/*

function printArray(){
    for(let i = 0; i < characters.length; i++){
        console.log(characters[i]);
    }
}

document.addEventListener("DOMContentLoaded", printArray);*/