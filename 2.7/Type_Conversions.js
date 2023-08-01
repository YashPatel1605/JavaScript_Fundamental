//TYPE CONVERSION

//String Conversion
//We can also call the String(value) function to convert a value to a string:

let a=3;
console.log(typeof String(a));//value convert into string

//Numeric Conversion
 let value="123";
 console.log(typeof Number(value)); //value convert into number


 /*
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
 */

//Boolean Conversion

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false


alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)