// Exporting modules
// We export modules so that we can use/utilize them in other files/ modules in our program

export const calculator = (x,y) =>{
    let difference = x - y

    console.log("The difference of the two numbers is: ", difference)
};


export const simpleInterest = (principle, rate, time) => {
    let si = ( principle * rate * time) / 100
    console.log("The simple interest gained is: ", si)
};

const bmi = (weight, height) =>{
    let answer = weight / (height **2)
    console.log("The bmi of the person is: ", answer)

}

export {bmi}