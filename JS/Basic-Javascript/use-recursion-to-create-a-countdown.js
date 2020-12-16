


// Only change code below this line
function countdown(n){
    if(n <= 0){
        return [];
    }
    let arr = countdown(n - 1);
    arr.unshift(n)
    return arr;
  }
  // Only change code above this line


  console.log(countdown(-1)) // []
  console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  console.log(countdown(5)) // [5, 4, 3, 2, 1]