// While loop
// Below is a simple syntax of the while loop
//1. Initialization of a variable
//2. while keyword
//3. Condition to be checked
//4. Body of while loop
let i = 0;

while(i <= 10 ){
    console.log("The new value of i is", i)
    i++

}



console.log("=========================")
// come up with a js example of a map loop
// it creates a new array
let number =[1,2,3,4,5];
let squares = number.map(num => num**2);

console.log(squares)

console.log("========================================")

const users = [
{ id:1, name:"Andrew", email: "andrew@gmail.com"},
{ id:2, name:"Ann", email: "ann@gmail.com"},

]
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
console.log(typeof(userNames))
// output ['Alice, 'Ann]

// Check the tasks on page 30
//write a loop to print all odd numbers from 1 to 19
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}

//write a for loop to count down from 10 to 1 and print the numbers in the console
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
   
