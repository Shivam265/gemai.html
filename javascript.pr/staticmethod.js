class Animal{
    constructor(name){
        this.name=Animal.capitalize(name)

    }
    walk(){
        alert("Animal"+this .name +" is walking ");
    }
    static capitalize(){
        return name.charAt(0).toUpperCase()+ name.substr(1,name.length)
    }

}
r = new Animal(Animal.capitalize("hello,rohit"))
r . walk()
//r . capitalize()