//find the square of numbers by using for loop
const numbers = [2, 4, 6, 8, 10];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
//console.log(output);

//find the square of numbers by using simple function
function square(numbers){
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        const result = element * element;
        output.push(result);
    }

}
//console.log(output);

//...OR...\\for a single element
function squareAnElement(element){
    return element * element;
}
const arrowFunc = element => element * element;
//const result = squareAnElement(2);
//console.log(result);

//find the square of numbers by using MAP
const result = numbers.map(function(element){
    return element * element;
});
//console.log(result);

//using ARROW Function and MAP
const squareArrow = numbers.map(element => element * element);
//console.log(squareArrow);

//using FILTER
const biggerThanFive = numbers.filter(element => element > 5);
//console.log(biggerThanFive);

//when the condition is not fulfill the FILTER will always give you an array
const lessThanTwo = numbers.filter(element => element < 2);
//console.log(lessThanTwo);//return an empty array

//FIND will give you a single element when the condition is fulfill
const isThere = numbers.find(element => element < 10);
console.log(isThere);