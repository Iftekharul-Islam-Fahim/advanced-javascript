const nums = [1, 2, 3, 4, 5, 6 ,7, 8, 9];

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 5){
        break;
    }
    console.log(nums[i]);
}

const mixedNums = [1, -2, 3, -4, 5, -6, 7, -8, 9];

for(let i = 0; i < mixedNums.length; i++){
    if(mixedNums[i] < 0){
        continue;
    }
    console.log(mixedNums[i]);
}