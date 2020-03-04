//case : 01
//---------

let name;
console.log(name);

//case : 02
//---------

function add(num1, num2){
    console.log(num1 + num2);
}
const result = add(10, 20);
console.log(result);

//case : 03
//---------

function add(num1, num2){
    console.log(num1 + num2);
    return
}
const result = add(10, 20);
console.log(result);

//case : 04
//---------

function add(num1, num2){
    console.log(num1, num2);//undefined
    //console.log(num1 + num2); //NaN
}
const result = add(10);
console.log(result);

//case : 05
//---------

const student = {name: "Fahim", phone: 01811379154};
console.log(student.id);

//case : 06
//---------

let fun = undefined;
console.log(fun);

//case : 07
//---------
let ages = [26, 27, 28];
console.log(ages[5]);

//.....NULL.......\\
let name = null;
console.log(name);