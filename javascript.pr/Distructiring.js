let arr = [2,6,8,7,2,1]
//let [a,b,c,...rest] = arr
//let[a,,,...rest]= arr
//console.log(a,rest)
let{a,b} = {a:1,b:5}
//console.log(a,b)
//spread function
let arr1  = [3,5,6]
let obj1 = {...arr1}
console.log(obj1)
function sum (v1,v2,v3){
    return v1+v2+v3

}
console.log(sum(...arr1))
let obj2  ={
    name:"rohit",
    company:"Google",
    address:"cbr"
}
//console.log({...obj2,name:"raaz",company:"Facebook"})
console.log({name:"raaz",company:"Facebook",...obj})//this will print the obj2 object without changing not value 
