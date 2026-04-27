console.log("hi");
console.log("Task 4 - Debugging");




// Set up the size of the page.
var height = 8;
var width = 10;


// calculate the area
var area = height + width;

// calculate the perimeter
var perimeter = 2 + height + 2 * width;  



// Display the results
console.log("A area of a piece of paper with a length of "+height+", and a width of "+width+" is "+ area);
console.log("The same piece of paper has a perimeter of "+perimeter);

// Check, does this result look sensible
if (perimeter > area){
    console.log("Yay, your area is larger, this is right for this example");
}else{
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example");
}
