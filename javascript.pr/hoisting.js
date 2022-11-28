//let a = 20;
//following two lines will run succesefully due to javaScript hoisting
console.log(a)
greet()
let  greet =function(){
    console.log("Good morning")

}
var a = 9;// declaration hoisted to the top but initilizaton is not 
console.log(a)