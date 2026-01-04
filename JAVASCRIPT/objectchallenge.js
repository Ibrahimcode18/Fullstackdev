let person = {
    name : "Pasha",
    age : 24,
    country : "Bludeco",
    construct : function (){
        console.log (this.name + " is " + this.age + " years old and lives in " + this.country)}
}

console.log(person.construct())