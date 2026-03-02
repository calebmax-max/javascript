// FUNCTIONS WITH PARAMETERS
// Parameters are values that get passed as arguments when we invoke a function.
// The help us create functions that can be reusable throughout  a pragram.


function greeting(name){
    console.log("Hello", name, "How have you been?")

}
greeting("Caleb Tonny")
greeting("John James")
greeting("Faith Mutheu")

console.log("================================")
// Below is a function with parameters to calculate the sum of two numbers

function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the two numbers is :", sum)
}
addition(45, 60)

console.log("================================")

//  By use of a function that accepte parameters calculate the area of the triangle whose base is 20cm and height is 12cm

function multuplication(num1, num2){
    product = num1 * num2 /2
    console.log("The product of the two numbers is:", product,"cm\u00B2")
}
multuplication(20, 12)

// Find the simple interest given the principle as 5000, rate 5% and time is 8years

function interest(p,r,t){
    inter = p * r * t /100
    console.log("The interest is:", inter)
}
interest(5000, 5, 8)