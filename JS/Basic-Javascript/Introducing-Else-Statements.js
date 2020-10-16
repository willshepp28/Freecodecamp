/**
 * 
 * Basic JavaScript: Introducing Else Statements
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine the if statements into a single if/else statement.

You should only have one if statement in the editor

You should use an else statement

testElse(4) should return "5 or Smaller"

testElse(5) should return "5 or Smaller"

testElse(6) should return "Bigger than 5"

testElse(10) should return "Bigger than 5".

You should not change the code above or below the specified comments.


 */

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if(val < 5){
      return "Smaller than 5";
    } else{
      return "Between 5 and 10";
    }
  }
  
  testElseIf(7);
  