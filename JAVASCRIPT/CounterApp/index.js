//document.getElementById("count-el").innerText = 5;


let number = 0
function increment(){
    number += 1
    document.getElementById("count-el").innerText = number;
}

let sentence = "Previous entries: "
function save(){
    let spacing = number + ' - ';
    sentence += spacing;
    document.getElementById("save-el").innerText = sentence;
    number = 0;
    document.getElementById("count-el").innerText = number;
}