class complex{
  constructor(real,imaginary){
    this.real = real
    this.imaginary = imaginary
  }
  add(num){
    let r = this.real + num.real
    let i = this.imaginary + num.imaginary
    return new complex(r,i)
  }
}
let a  = new complex(2,5)
let b = new complex(8,2)
console.log(a.add(b))
console.log(a.real,a.imaginary)

    
  


