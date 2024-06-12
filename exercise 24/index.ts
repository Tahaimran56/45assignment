/*
more Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

      //test for equality and inequality with string
let taha="taha"
 console.log("Testing equality with strings.")
 console.log(taha=="taha") //true
 console.log(taha=="Taha") //false

    //Tests using the lower case function
console.log("testing using lower case.")
console.log("Taha".toLowerCase()=="taha")//true
console.log("Taha".toLowerCase()=="Taha")//false

   // numerical testing
console.log("numerical testing.")
console.log(3>1)//true
console.log(9<5)//false

    // Tests using "and" and "or" operators
console.log("Tests with AND and OR:")
console.log(true&&false)//false
console.log(true ||false)//true

   //Test whether an item is in a array
console.log("test and item in a array")
let student=["taha","babar","hanan"]
console.log("is taha in students?")
console.log(student.includes("taha"))//true


   //Test whether an item is  not in a array
console.log("Test whether an item is  not in a array")
console.log("is duaa in students?")
console.log(!student.includes("duaa"))//true
