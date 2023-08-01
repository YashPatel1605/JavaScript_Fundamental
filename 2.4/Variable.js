//In javaScript There Are 3-Type Of variable
/*
1]=> var ==>Global scope
2]=> let ==>Block Scope
3]=> Const ==>Block Scope
*/

//1]=> var ==> In var variable ==>value will be assign,value will be override

/*
var a=10;
var a=20; 
console.log(a); //output=20
*/

/*
var x=5;
 x=10; //override value
 console.log(x); //output=10
 */

 //2]=> let ==> In let variable ==>value will be assign,value will be override
 
 /*
 let p=20;
 let p=22;
 console.log(p); // SyntaxError: Identifier 'p' has already been declared
 */
let p=34;
p=21; //value is override
console.log(p);  //output=21

//2]=> const ==> In const variable ==>value will be assign(constant Value)
//the const variable the value will not override

/*
 const name="yash";
 name="Mayur"; //TypeError: Assignment to constant variable.
 console.log(name);
 */