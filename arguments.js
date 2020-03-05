function add(num1, num2){
    //console.log(arguments);//array like object
    const arrayLikeObj = arguments;
    const convertToAnArray = ([...arrayLikeObj]);
    let sum = 0;

    for(let i = 0; i < convertToAnArray.length; i++){
        const element = convertToAnArray[i];
        sum = sum + element;
    }
    return sum;
}
const result = add(2, 3, 5, 7);
console.log(result);