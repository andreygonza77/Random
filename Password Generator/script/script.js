const btn = document.querySelector(".btn");
const passwordTxt = document.querySelector(".passwordTxt");
const max = 16;
const halfMax = 8;
const rootMax = 4;
const characters = [
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
  "a", "s", "d", "f", "g", "h", "j", "k", "l",
  "z", "x", "c", "v", "b", "n", "m",

  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "Z", "X", "C", "V", "B", "N", "M",

  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",

  "!", "?", "%", "/", "£", "€", "&", "(", ")", "=", "'", "+", "-", "*", ",", ".", ";", ":", "_", "@", "#", "$", "^"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


function getSecureIndex(n){
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % n;
}

function getPassword(){
    let password = "";
    switch(checkSelect()){
        case 1:
            password = password1();
            break;
        case 2:
            password = password2();
            break;
        case 3: 
            password = password3();
            break;
    }
    return password;
}

function start(){
    passwordTxt.innerHTML = `<b>` + getPassword() + `</b>`;
}
btn.addEventListener("click", start);

function password1(){
    let password = "";
    for(let i = 0; i < max; i++){
        let index = getSecureIndex(characters.length);
        let indexNumb = getSecureIndex(numbers.length);
        if(i + 1 == max){
            if(!checkPassword(password)) password += numbers[indexNumb];
        }
        password += characters[index];
        
    }
    return password;
}

function password2(){
    let password = ""; // xxxx-xxxx-xxxx
    let indexNumb = getSecureIndex(numbers.length);
    for(let j = 0; j < 3; j++){
        for(let i = 0; i < rootMax; i++){
            let index = getSecureIndex(characters.length);
            
            
            password += characters[index];
        }
        if(j < 2) password += "-";{
                if(!checkPassword(password)) password += numbers[indexNumb];
        }
    }
    return password;
}

function password3(){
    let password = "";
    let indexNumb = getSecureIndex(numbers.length);
    for(let i = 0; i < halfMax; i++){
        let index = getSecureIndex(characters.length);
        if(i + 1 == halfMax){
            if(!checkPassword(password)) password += numbers[indexNumb];
        }
        password += characters[index];
    }
    return password;
}
const passwordStyleSelect = document.querySelector(".passwordStyle");

function checkPassword(pw){
    return /\d/.test(pw);
}

function checkSelect(){
    switch(passwordStyleSelect.value){
        case "opt1": 
            return 1;
        case "opt2":
            return 2;
        case "opt3":
            return 3;
        default: return 1;
    }
}

/*

function printArray(){
    for(let i = 0; i < characters.length; i++){
        console.log(characters[i]);
    }
}

document.addEventListener("DOMContentLoaded", printArray);*/