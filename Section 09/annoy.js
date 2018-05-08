// VERSION 1
// var guess = prompt ("Are we there yet?")

// while(guess !=="yes"&& guess !== "yup") {
//     var guess = prompt ("Are we there yet?")
// }
// alert("Yay! We made it!")

// VERSION 2
// better version, can check answers in strings
var guess = prompt ("Are we there yet?")

while(guess.indexOf ("yes") === -1 && guess.indexOf ("yup") === -1) {
    var guess = prompt ("Are we there yet?")
}
alert("Yay! We made it!")
