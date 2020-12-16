
 function processDoll(doll){
     console.log("processing")
     if(doll.message){
         console.log(doll.message)
        return true
     } else {
         processDoll(doll.next)
     }
 }


 let doll = {
    next: {
        next: {
            next: {
                message:"You have made it"
            }
        }
    }
 };


//  processDoll(doll);

 function multiply(arr, n) {

    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

//   console.log(multiply([2, 3, 4], 3))



  function reverseStr(s, counter = 1){
      
      if(counter >= s.length){
          return "done"
      }
      
      return s[s.length - counter] += reverseStr(s, counter + 1);
  }

  console.log(reverseStr("cowbell"))