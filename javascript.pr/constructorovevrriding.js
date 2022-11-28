class Employee{
    constructor(){ 
        console.log(' ${name} = employee is constructor here ')
        this.name = name
    

    }
    login(){
        console.log('employee has logged in');
    }
    month(){
        console.log('faculty your attendence')
    }
        
    logOut(){
        console.log('employee has logged in');
    }
    requestleaves(leaves){
        console.log('employee has requested +$ {leaves}');
        
    }
}
class Programmer extends Employee {
    //constructor(...args){
        //super(...args)
    //}

    requestCoffe(x){
        console.log('Employee has requested');
    }
    requestleaves(leaves){
        super.requestleaves(4)
        console.log('one extra is given');
    }

}
    
let e =  new  Programmer()
e.login()
e.requestleaves(3)
e.logOut()
e.month()   
