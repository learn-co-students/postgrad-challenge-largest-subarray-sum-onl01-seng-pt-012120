function largestSubarraySum(array){
    let sum = 0;
    let newSum = 0;
    let largestSubarray = [];
    for (let i = 0; i < array.length; i++) {
        newSum = sum + array[i];
        if (newSum >= sum) {
            largestSubarray.push(array[i]);
            sum = newSum;
        }
    };
    return largestSubarray
}