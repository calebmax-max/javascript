// Arrow functions with parameters

const greet = (name) =>{
     console.log("Hello" + name + " How have you been? I trust that you are good.")
}

greet("James")
greet("Joseph")




//Example two
console.log("+++++++++++++++++++++++++++++++++++++++++++++++")
// Below is a function to find the area of a cicle
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the cicle is: " + area + "cm\u00B2")
}
CircleArea(3.142, 7);
CircleArea(3.142, 28);

console.log("==========================================")
// Come up with your own example of an arrow function that utilizes 3 parameters
const area = (side1,side2,height) =>{
    let area = side1 * side2 * height / 2
    console.log("The area of the trapezium is: ", area, "cm\u00B2 ")

}
area(4,8,6);
area(6,7,8);

