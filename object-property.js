const students = [
    {id: 11, name: "Mister Bean"},
    {id: 22, name: "james Bond"},
    {id: 33, name: "Jason Bourne"},
    {id: 44, name: "Ethan Hunt"}
];
const names = [];

for(let i = 0; i < students.length; i++){
    const element = students[i];
    const result = element.name
    names.push(result);
}
//console.log(names);

const studentNames = students.map(student => student.name);
//console.log(studentNames);

const studentIds = students.map(student => student.id);
//console.log(studentIds);

const biggerThanTwenty = students.filter(student => student.id > 20);
//console.log(biggerThanTwenty);

const isThereAnyBigger = students.find(student => student.id > 20);
console.log(isThereAnyBigger);