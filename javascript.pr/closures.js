message  = "Good global"
function hello1(){
    let message = "Good morning"
    {
        let message = "Good Afetnoon"
        console.log("hello1 "+ message)
    }
    let c = function hello2(){
        console.log("i am c"+ message)
    }
    return c

}
c=hello1()
c()  