const sayHello= (name,greeting) =>console.log(greeting +" "+ name)
console.log("greeting to this ")
console.log("hey")

const x = {
    name:"rohit",
    company:"hcl",
    address:"cbr",
    show: function(){
        //let that = this 
        //console.log (this)
        setTimeout(()=>{
            console.log(this)
            console.log('this name is ${this.name}/n the role is ${this.role is $(this.role}')
        },5000)
    }
}
sayHello("hello shivam kumar")
x.show()
console.log(x)
    





//console.log(x.company)
    //sayHello("rohit","good afternoon")
x.show()