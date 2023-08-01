//Constructor, operator "new"

//Constructor function

/*
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.

 */

function Student(name,age){
    this.name=name;
    this.age=age;
}
let student=new Student("Yash Patel",21);
console.log(student);

//Return from constructors

/*
Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
*/

function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  alert( new BigUser().name );  // Godzilla, got that object
  

//Methods in constructor

function Data(name){
    this.name=name;
   this.sayHello=()=>{
        alert(`My name Is ${this.name}`);
    };
};

let user=new Data("Yash Patel");
user.sayHello();