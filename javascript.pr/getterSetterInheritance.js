class mcu{
    constructor(name){
        this._name = this._name

    }
    mca(){
        alert("hello mcu student")
    }
    get name(){
        return this._name
    }
    set name(newName){
        this.name = newName
    }


}
    let a = new mcu("rohit");
    a.mca()
    a.name = "mohit"
    console.log(a._name)


