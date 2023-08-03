//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
//ucFirst("john") == "John";

function ucFirst(name){
  return name[0].toUpperCase()+name.slice(1);
}
console.log(ucFirst("yash"));