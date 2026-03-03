// Assignment

//const is preferred for arrow functions because the function reference should not change.
const greeting = (name) => {
    console.log(`Hello ${name}`);
};

greeting("Caleb"); // Hello Caleb

// Trying to reassign will cause an error
// greet = () => console.log("Hi"); // ❌ Error

//You can use let, but it allows the function reference to change:
let greetings = (name) => {
    console.log(`Hello ${name}`);
};

greetings("Caleb"); // Hello Caleb

// Reassigning is allowed
greet = (name) => console.log(`Hi ${name}`);
greetings("Caleb"); // Hi Caleb


// Global and Local variables

const number =(num) =>{
    for(let num=1; num <=50; num++)
        if(num %3 == 0){
            console.log("Fizz")
        }
        else if(num %5 ==0){
            console.log("Buzz")
        }
        else if(num % 3 == 0 && num % 5 == 0){
            console.log("FizzBuzz")
        }
        else{
            console.log(num)
        }

};
number();