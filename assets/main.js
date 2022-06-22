// GLOBAL SCOPE - accessible anywhere

// var a = 10;
// let b = 20;

// if(100 > 20) {
//     var a = 100;
//     console.log(b);
// }

// function apprentice() {
//     return b;
// }

// console.log(a);


// FUNCTIONAL SCOPE - accessible within a function



// BLOCK SCOPE - accessible within a block


// variable declarations
// var, let and const


// const c = 200;

// GLOBAL SCOPE: accessible everywhere in out application
// var a = 30;
// let b = 400;

// FUNCTIONAL SCOPE: variable is only accessible in function block

// function apprentice() {
     // var a = 30;
     // let b = 400;
// }

 // apprentice();

 // console.log(a, b);

 // BLOCK SCOPE: variable is only accessed within a block
// function cloud() {
     // var a = 30;
     // let b = 400;
// }

// var a = 20;

// if(100 > 20) {
//     var a = 30;
//     let b = 400;
     // console.log(b);
// }

// console.log(a);

// let or const

// let price1 = 400;
// price1 = 300;

// const price2 = 400;

// let price3;

// console.log(price3);

// const TAX_RATE = 0.3;

// let my_age = 30;
// my_age = 31;

// let maizeFlourPrice = 200;
// let chocolatePrice = 400;
// let TPrice = 30;

// maizeFlourPrice = 150;
// chocolatePrice = 300;
// TPrice = 25;

 // FUNCTIONS
// function calculatePrice(mfp, tr, cb) {
//     let totalPrice = 0;
//     totalPrice = totalPrice + (mfp * maizeFlourPrice);
//     totalPrice = totalPrice + (tr * TPrice);
//     totalPrice = totalPrice + (cb * chocolatePrice);
//     return totalPrice;
// }

// console.log(calculatePrice(2, 5, 2));

// // ES5
// function bootcamp() {
//     const sum = 2 + 5;
//     return sum;
// }

// console.log(bootcamp());

 // ES6, arrow functions, fat arrow functions
// const calculateArea = (length, width) => {
//     return length * width;
// }

// console.log(calculateArea(100, 50));

// const circleArea = radius => {
//     return 22/7 * radius * radius;
// }

// console.log(circleArea(7));

// const calculateArea1 = (length, width) => length * width;

// const circleArea1 = radius => 22/7 * radius * radius;

// console.log(calculateArea1(100, 50));
// console.log(circleArea1(7));

// const difference = (num1, num2) => num1 - num2;

// console.log(difference(10, 7));

const calculateExponential = () => {
    const base = document.querySelector("#base").value;
    const power = document.querySelector("#power").value;

    const exp = Math.pow(base, power);
    const generatedTag = document.createElement('h2')
    generatedTag.innerHTML = `${base} to the power of ${power} is: ${exp}`

    document.body.appendChild(generatedTag);
}

// function useless(sum) {
//     let incr1 = sum + 1;
//     return incr1;
// }

// function xyz() {
//     let sum = 2 + 2;
    
//     const result = useless(sum);
//     return result;
// }

// console.log(xyz());