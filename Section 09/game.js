// create secretNumber
var secretNumber = 5;

// ask user to guess
var stringGuess = prompt ("What's the magic number?");
var guess = Number(stringGuess);
//1st line; prompt always equal value
//2nd line; changes the value into a number

// check guess
if (guess === secretNumber)
    {
    alert ("Abracadabra! Open Sesame! You have opened the greatest treasure of them all!");
    } 
// === is supersensitive, down to actual value
else if (guess > secretNumber)
    { 
    alert ("Wrong! Too High");
    }
else 
    { 
    alert ("Wrong! Too Low");
    }
