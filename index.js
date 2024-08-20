//declare function fizzBuzz that takes two parameters, which are strings
//declare a formula that adds the string length of the two strings
//we then state a conditional statement that checks the the three cases of expected result
//return the output
function fizzBuzz(str1, str2){
  let strSum = str1.length + str2.length;
  
  if(strSum % 3 == 0){ 
      console.log("fizz");
  } else if(strSum % 5 ==0){
      console.log("Buzz");
  }else if(strSum %3 ==0 && strSum %5 ==0){
      console.log("fizzBuzz")
      
  }
      
} 
fizzBuzz("babys", "girls")