

/*************
Intro
*************/


/****************************
This is a block comment.
Put your header comment here!
****************************/
console.log("Running t01_introduction.js");
console.log("Gachiakuta PEAK!");




//variables
    
    let money=2;

    //user
    let userName="Timothy";

    //user age
    let age=15;

    //year
    let year=2026;

    //html
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

// maths

    //answer
   let answer ;

   //answer
   let answer2 ;



/*************
Main code
*************/

answer= money/2;
answer2= answer+3;


console.log ("You got " + money + " moneys");

console.log ("Hi " +userName+ " As of "+year+" you are " +age+ " years old You have "+money+ " dollars");

console.log("You spend half of your money, now you have " +answer+"$ Then you get $3, now you have " +answer2+"$");

console.log("Task 05 running");
 
//task 05 HTML
OUTPUT.innerHTML = "<h1>hello</h1>";
OUTPUT.innerHTML += "<h2>This is html via javascript</h2>";

//task 06 functions 
console.log("Task 06 running");
callWelcome()






/*************
functions
*************/
    //adds paragraph WELCOME!!!!
    function callWelcome (){
     OUTPUT.innerHTML += "<p> Welcome!</p>";

    }