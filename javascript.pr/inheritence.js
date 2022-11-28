class Animal{
    constructor(name,color ){
        this.name = name
        this.colo =  color
    }
    run(){
        console.log(this.name+"is running")
        
    }
    shout(){
        console.log(this.color+"is shouting")
    }
    }
    class monkey extends Animal{
        eatBanana(){
            console.log(this.name +" is eating banana");

        }


    }
    let ani = new Animal("white" ,"black","green")
    let m =new monkey("apple","Banana")
    ani.shout()
    m.eatBanana()

    