// exercise 1, print out odd numbers before 10
var num = 1;

while (num <=10) 
{
console.log (num); num += 2;
}
// 

//exercise 2, print out by multiple of 4 between 1 to 20
var num = 1;

while (num <=20)
{
    if (num % 4 === 0) 
    {
        console.log (num);
    }
    num++;
}

//exercie 3, infinite loop since it's counting negative which will never reach 150
var num = 100;

while (num < 150)
    {console.log (num + 1);
        num--;
}