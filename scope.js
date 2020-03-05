//global scope
let eidBonus = 15000;

function salary(april, may){
    let amount = april + may + eidBonus; //amount : local scope; eidBonus : global scope 
    //console.log(amount);
    if(amount > 40000){
        //--------Block Scope----------\\
        //const employeeMood = "happy";
        // let employeeMood = "happy";
        var employeeMood = "happy";
        employeeMood = "super charged";
        employeeMood = "cool";
        //console.log(employeeMood);
    }
    //console.log(employeeMood);
    console.log(day);
    var day = "friday"; //var can't hoist the value

    return amount;
}
const result = salary(15000, 30000);
//console.log(amount); //not accessible, because amount at in local scope
console.log(eidBonus); //eidBonus : global scope
console.log(result);