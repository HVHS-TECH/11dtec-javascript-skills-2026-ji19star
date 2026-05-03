

/*************
task 12
*************/


/****************************
This is a block comment.
Put your header comment here!
****************************/
console.log("Running t12_introduction.js");
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

//Task 07 
    let price ;

    let name ;

//09

 let one;

 let two;

//10
const NAME_FEILD= document.getElementById("nameField");
let usersName = NAME_FEILD.value;

//11
const MONEY_FEILD= document.getElementById("monField");
let userMon = MONEY_FEILD.value;
//thats whats bugging it out sob im so buns
    


/*************
Main code
*************/

answer= money/2;
answer2= answer+3;

//task 01,02,03
console.log ("You got " + money + " moneys");


console.log ("Hi " +userName+ " As of "+year+" you are " +age+ " years old You have "+money+ " dollars");

console.log("You spend half of your money, now you have " +answer+"$ Then you get $3, now you have " +answer2+"$");

//task 05 HTML
console.log("Task 05 running");

OUTPUT.innerHTML = "<h1>hello</h1>";
OUTPUT.innerHTML += "<h2>This is html via javascript</h2>";

//task 06 functions 
console.log("Task 06 running");
//callWelcome()

//task 07 
console.log("Task 07 running");
 //displayWelcome()

displayProduct("Chocolate", 4)

displayProduct("Chips", 3)

displayProduct("Drink", 2.50)

//task 09
console.log("Task 09 running");

//10
console.log("task 10 is running")

//11
console.log("task 11 is running")
 console.log(+userMon+" moneys");

 //11
console.log("task 12 is running")


/*************
functions
*************/
    //adds paragraph WELCOME!!!!
    function callWelcome (){
     OUTPUT.innerHTML += "<p> Welcome!</p>";
    }

  
      //making sense of it ig
    function displayProduct (_name, _price){
     OUTPUT.innerHTML += _name+": " +_price+"$ <br>";
    }
    
    //09
     function start (_one, _two){ 
     OUTPUT.innerHTML += "You pressed "+_one+ " or " +_two+ " Times! <br>";
    }

    //10
     function getFormInput (){ 
     const NAME_FEILD= document.getElementById("nameField");
     let usersName = NAME_FEILD.value;
     OUTPUT.innerHTML += "<p>Your name is " +usersName+"</p>";
    }
//11 & 12
    function getMonFormInput (){ 
     const MONEY_FEILD= document.getElementById("monField");
     let userMon = MONEY_FEILD.value;
     OUTPUT.innerHTML += "<p>Your Money is " +userMon+"</p>";
     console.log(+userMon);
     console.log("WORKS");
    if (userMon >= 4) {
             OUTPUT.innerHTML += "<p> DEVOUR THE FOOD</p>";
        }
     else {
         OUTPUT.innerHTML += "<p> cant afford chocolate, brokie</p>";
     };


    }

