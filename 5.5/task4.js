function copySorted(arr) {
    return arr.slice().sort();
  }
  let arr = ["yash", "mayur", "shiv"];
  let sorted = copySorted(arr);
  alert( sorted );
  alert( arr );