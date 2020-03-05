const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//slice(startIndex, endIndex)
const part = nums.slice(0, 4);
console.log(part);

//splice(startIndex, deleteCount, numbers[])
const removed = nums.splice(0, 5, 11, 22, 33, 44, 55);
console.log(removed);
console.log(nums);
const together = nums.join(", ");
console.log(together);