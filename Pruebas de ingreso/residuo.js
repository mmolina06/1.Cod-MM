function arr(nums){
    let array_2 =[] 
    for (let i = 0; i <= (nums.length-1); i++) {
    if (nums[i] % 2 == 0){
    array_2.push(nums[i]);
    }
    
    }
        return(array_2)
    }
    console.log(arr([1,2,4]));