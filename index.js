
// question 1
for (let age = 30; age < 40; age++) {
  console.log (`I'm ${age} years old. Happy birthday to me!`);
}

// question 2
function writeCards (arr, event) {
let thankYouCards = [];
for (let i = 0; i < arr.length; i++){
  thankYouCards.push(`Thank you ${arr[i]}, for the wonderful ${event} gift!`) 
  }
  return thankYouCards;
}

console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
console.log(counterTwo);
counterTwo++;
}