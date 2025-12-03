/*console.log("Hello World");

var myFirstVar = 5; //numbers
var string ="my string"; //words
var booo = true; //false
var myNull = null; //nothingness
var y = undefined; //yet to be defined
var big = BigInt; //large numbers
var sym = Symbol //symbols

console.log(myFirstVar,string,booo);

myFirstVar = 3;

console.log(myFirstVar);

var FirstName = prompt('what is your name');
var LastName = prompt("what is your last name");
console.log(FirstName);
console.log(LastName);


console.log(`${FirstName} ${LastName}`);


var x = 1;
var y = 3;

console.log(x+ "hi" + y);

var xx = "1";
var yy = 3;

console.log(xx+yy);

var xxx = "1";
var yyy = "3";

console.log(xxx+yyy);

console.log(typeof(xx+yy));

console.log(typeof(x+ "hi" + y));


var ageString = prompt("what is your age");
console.log(typeof ageString);
console.log(ageString);

var ageAsNumber = parseInt(ageString);

console.log(ageAsNumber);
console.log(typeof ageAsNumber);

if(ageAsNumber > 17){
        console.log("come on in");
} else {
    console.log("do not enter");
}



//prompt user to guess a number 1 - 10, then tell the if they got it right or got it wrong then show the results on the page

console.log(Math.floor(Math.random() *10)+1);

if userinput === randnum 






const guess = prompt('Pick a number 1 - 10');
const num = Math.floor(Math.random() *10)+1;

const guessAsNumber = parseInt(guess);

if(guessAsNumber === num){
    alert('WITCH')
} else {
    alert("Not Witch")
}
*/

//document.addEventListener("DOMContentLoaded", function () {
    // your JS here


const input = document.getElementById("guess");
const button = document.getElementById("check");
const results = document.getElementById("result")
let num = Math.floor(Math.random() *10)+1;
const timer = document.getElementById("timer");


button.addEventListener('click', function () {

    const guess = input.value;
    const guessAsNumber = parseInt(guess);

        if(guessAsNumber === num){
            results.textContent = "witch";
        } else {
            results.textContent = "not witch";
        } 
   
        let timeLeft = 5;
        timer.textContent = `Resetting in ${timeLeft}...`;
        
        const intervalId = setInterval(function () {
          timeLeft = timeLeft - 1;  // or timeLeft--
        
          if (timeLeft > 0) {
            timer.textContent = `Resetting in ${timeLeft}...`;
          } else {
            clearInterval(intervalId); // stop the countdown
            input.value = "";
            results.textContent = "";
            timer.textContent = "";
            num = Math.floor(Math.random() * 10) + 1; // new round
          }
        }, 1000);
        
    });

  console.log(num);
//});
