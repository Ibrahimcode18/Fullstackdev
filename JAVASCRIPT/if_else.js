let age = 15

if (age < 6){
    console.log("free")
}
else if (age >= 5 && age <= 17){
    console.log("child discount")
}
else if (age >= 18 && age <=26){
    console.log("studnet discount")
}
else if (age >= 27 && age <= 66){
    console.log("full price")
}
else{
    console.log("senior citizen discount")
}