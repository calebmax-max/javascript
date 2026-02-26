// Comparison Operators
// They usually return a boolean value (true or false)
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

// Triple equal sign (===) - It checks for both value and data type
// Logical operators are used to evaluate two or morw conditions and also give a boolean answer

// Logical AND (&&) - It returns true if all of the conditions are true 
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

// Logical OR (||) - It returns true if at least one condition is true
console.log((number1 > number2) || (number2 > number1))  

// Logical NOT (!) - It negates the condition and returns the opposite value
console.log(!(number1 < number2))     


