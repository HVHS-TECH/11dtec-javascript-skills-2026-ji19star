

/*************
task 15
*************/


/****************************
This is a block comment.
Put your header comment here!
****************************/
console.log("Running t15_introduction.js");
console.log("Gachiakuta PEAK!");




//variables

let money = 2;

//user
let userName = "Timothy";

//user age
let age = 15;

//year
let year = 2026;

//html
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

// maths

//answer
let answer;

//answer
let answer2;

//Task 07 
let price;

let name;

//09

let one;

let two;

//10
const NAME_FEILD = document.getElementById("nameField");
let usersName = NAME_FEILD.value;

//11
const MONEY_FEILD = document.getElementById("monField");
let userMon = MONEY_FEILD.value;
//thats whats bugging it out sob im so buns


//12
var change = calculateChange();
let changes;
let moneys = MONEY_FEILD.value;
let prices;

//14 array

const CHOOSE_FEILD = document.getElementById("chocField");
let opinArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
let choice = CHOOSE_FEILD.value;

//15


for (let bottles = 1; bottles < 99; bottles++) {
    //console.log(bottles + " Of milk on the wall!");
}



/*************
Main code
*************/

answer = money / 2;
answer2 = answer + 3;

//task 01,02,03
console.log("You got " + money + " moneys");


console.log("Hi " + userName + " As of " + year + " you are " + age + " years old You have " + money + " dollars");

console.log("You spend half of your money, now you have " + answer + "$ Then you get $3, now you have " + answer2 + "$");

//task 05 HTML
console.log("Task 05 running");

OUTPUT.innerHTML = "<h1>hello</h1>";
OUTPUT.innerHTML += "<h2>This is html via javascript</h2>";

callWelcome()

displayProduct("Chocolate", 4)

displayProduct("Chips", 3)

displayProduct("Drink", 2.50)

//11
console.log(+userMon + " moneys");




/*************
functions
*************/
//adds paragraph WELCOME!!!!
function callWelcome() {
    OUTPUT.innerHTML += "<p> Welcome!</p>";
}


//making sense of it ig
function displayProduct(_name, _price) {
    OUTPUT.innerHTML += _name + ": " + _price + "$ <br>";
}

//09
function start(_one, _two) {
    OUTPUT.innerHTML += "You pressed " + _one + " or " + _two + " Times! <br>";
}

//10
function getFormInput() {
    const NAME_FEILD = document.getElementById("nameField");
    let usersName = NAME_FEILD.value;
    OUTPUT.innerHTML += "<p>Your name is " + usersName + "</p>";
}
//11 & 12
function getMonFormInput() {
    const MONEY_FEILD = document.getElementById("monField");
    let userMon = MONEY_FEILD.value;
    OUTPUT.innerHTML += "<p>Your Money is " + userMon + "</p>";
    console.log(+userMon);
    if (userMon >= 4) {
        OUTPUT.innerHTML += "<p> DEVOUR THE FOOD</p>";
        calculateChange(userMon, 4);
    }
    else {
        if (userMon <= 4) {
            OUTPUT.innerHTML += "<p> cant afford chocolate, brokie</p>";
            OUTPUT.innerHTML += "<p> cant afford chocolate, brokie</p>";
        }
    };
};

//13
// price is just the price of chocolate

//13
function calculateChange(_moneys, _prices) {
    let changes = _moneys - _prices;
    OUTPUT.innerHTML += "you have " + changes + " change";
    console.log("change SUCESS")
    return changes;
};

//14 array
function chocInput() {
    const CHOOSE_FEILD = document.getElementById("chocField");
    let opinArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
    let choice = CHOOSE_FEILD.value;
    OUTPUT.innerHTML += "You chose: " + opinArray[choice] + "<br>";
};


//14 array
function verseInput() {
    const VERSE_FEILD = document.getElementById("verseField");
    //the number/value that the user inputs
    let verse = VERSE_FEILD.value
    //makes the string
    let verses = [];
    console.log("verse")
    // ++ adds one onto the end. 
    for (let bottles = 1; bottles < 100; bottles++) {
        verses.push(bottles)
    }
    OUTPUT.innerHTML += "You chose:" + verses[verse] + " Bottles of milk on the wall <br>";

};

function verses() {
    for (let bottles = 1; bottles < 100; bottles++) {
        OUTPUT.innerHTML += bottles + " Bottles of milk on the wall <br>";
        if (bottles < 0) {
            OUTPUT.innerHTML += " No moreBottles of milk on the wall <br>";
        }
    }
};













