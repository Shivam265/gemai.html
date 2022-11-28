class RailwayForm{
        //console.log("constuctoe is called..."+givename + " + train no")
        //this.name = givename
        //this.trainno = trainno
        //this.address = address
    //}
    submit(){
        alert("form submitted Registration"+ this.Trainno+"Bhopal to kanpur")
    }
    cancel(){
        alert("this form is cancel,+ Train No 146785"+this.Trainno+"PBH BHOPAL TO KANPUR" )
        //this.trainno  = 0
    }
    waiting(){
        alert("waiting from the ticket,+ Train no 75656"+this.Trainno)
    }
}
let rohit = new  RailwayForm()
let rohan =  new RailwayForm()
let mohan = new RailwayForm()
rohan.submit()
rohit.cancel()
mohan.waiting()

console.log("hello")


