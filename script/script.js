const btn = document.querySelector(".btn");
const passwordTxt = document.querySelector(".passwordTxt");
const array = [
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
  "a", "s", "d", "f", "g", "h", "j", "k", "l",
  "z", "x", "c", "v", "b", "n", "m",

  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "Z", "X", "C", "V", "B", "N", "M",

  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",

  "!", "?", "%", "/", "£", "€", "&", "(", ")", "=", "'", "+", "-", "*", ",", ".", ";", ":", "_", "@", "#", "$", "^"];

function getPassword(){
    let password = "";
    for(let i = 0; i < 16; i++){
        let n = Math.floor(Math.random() * array.length);    
        console.log(array[n]);
        password += array[n];
    }
    return password;
}

function start(){
    passwordTxt.innerHTML = getPassword();
}

btn.addEventListener("click", start);


/*
function printArray(){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

document.addEventListener("DOMContentLoaded", printArray);
*/