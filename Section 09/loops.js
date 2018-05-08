//exercise 1
//print all numbers between -10 and 19
console.log("print all numbers between -10 and 19")
for(i = -10; i <= 19; i++){
	console.log(i);
}

//exercise 2
//print all even between 10 and 40
console.log("print all even between 10 and 40")
for(i = 10; i <= 40; i += 1){
    if(i % 2 === 0) {
    console.log(i);
    }
}

//exercise 3
//print odd numbers from 300 and 333
console.log("print odd numbers from 300 and 333")
for(i = 300; i <= 333; i++){
	if(i % 2 === 1){
		console.log(i);
	}
}

//exercise 4
//print numbers divisible by both 5 and 3 from 5 to 50
console.log("print numbers divisible by both 5 and 3 from 5 to 50")
for(i = 5; i <= 50; i++){
	if(i % 5 === 0 && i % 3 === 0){
		console.log(i);
	}
}