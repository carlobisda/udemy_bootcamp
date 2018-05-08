// print all numbers between -10 to 19
var num = -10;

while (num <=19) 
{
console.log (num); num += 1;
}

// print all even numbers between 10 to 40
var num = 10;

while (num <=40) 
{
console.log (num); num += 2;
}

// print all odd numbers between 300 to 330
var num = 300;

while (num <=330) 
{ 
    if (num % 3 === 0)     
    {
        console.log (num); num += 3;
    }
}  

// print all numbers divisible by 5 and 3 between 5 to 50
var num = 5;

while (num <=50)
{
    console.log (num); num %= 5;
}