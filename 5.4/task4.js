// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.


function sumInput(){
    let value=[];
    while(true){
        let number=+prompt("Enter The Value");
        if(number===""|| number===null || !isFinite(number))break;
        value.push(number);

    }
    let sum = 0;
  for (let num of number) {
    sum += num;
  }
  return sum;
}

alert( sumInput() );