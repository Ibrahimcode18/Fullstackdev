let home = document.getElementById("home")
let guest = document.getElementById("away")
let number1 = 0
let number2 = 0
function addone(status){
    if (status === "home"){
        number1 +=1
        home.innerText = number1
        console.log(home)
    }
    else{
        number2 +=1
        guest.innerText = number2
    }
}

function addtwo(status){
    if (status === "home"){
        number1 +=2
        home.innerText = number1
        
    }
    else{
        number2 +=2
        guest.innerText = number2
    }
}

function addthree(status){
    if (status === "home"){
        number1 +=3
        home.innerText = number1
        console.log(home)
    }
    else{
        number2 +=3
        guest.innerText = number2
    }
}

function reset(){
    number1 = 0;
    number2 = 0;
    home.innerText = number1;
    guest.innerText = number2;
}