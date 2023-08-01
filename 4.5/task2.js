/*
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties
*/
function Calculator() {

    this.read =()=>{
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum =()=>{
      return this.a + this.b;
    };
  
    this.mul =()=>{
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );