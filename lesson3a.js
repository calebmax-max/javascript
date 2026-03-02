// Javascript For Loop
// Loops are used to iterate through something (Repeat something a number of times) 
//Structure of the for loop
//1. for keyword followed by paranthesis
//2. initialization, set the condition, increement/decreement
//3. Body of the loop


for(let i=0; i <= 10; i++){
    console.log("The new value of i is: ", i)
}

console.log("========================================")
for(let i=0; i <= 10; i++)
    if(i== 6){
        console.log("This is six", i)
    }

    else{ 
        console.log( "The new value of i is" ,i)
    }

console.log("========================================")
// Create a for loop that is able to print out all the leap years from 2000 to 2026
for (let year = 2000; year <= 2026; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year);
  }
}

// ON the pdf check page 28
// write  a loop to find the largest number in the array:[10, 20, 4, 45, 99, 1]
const numbers = [10, 20, 4, 45, 99, 1];

let largest = numbers[0]; // assume first number is largest

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Largest number is:", largest);

// write a for loop to print the multiplication table of 5 from 5 * 1, to 5 * 10
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}
   
