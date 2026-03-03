// Arrow functions
// This is a function that was introduced in the ECMA Script 6 and they give us the latest/modern way of defining functions in a compact manner
// At times the arrow functions can be sayed to be anonymous functions why? This is because they use the names of the variables they are contained in


const sayHello = () =>{
    console.log("This is an arrow function.")
}

sayHello();

 console.log("===========================================")
 // Create an arrow function that is able to find the product if three numbers

 const product = () =>{
    num1 = 10
    num2 = 20
    num3 = 10
    product = num1 * num2 * num3
     console.log("The product of the numbers is: ",product)
 }
product();

