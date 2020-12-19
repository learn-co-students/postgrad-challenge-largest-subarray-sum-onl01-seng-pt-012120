function largestSubarraySum(array){
    let currentMax = 0;
    let maxAtThisIndex = 0;

    for (let i = 0; i < array.length; i++) {
        maxAtThisIndex = maxAtThisIndex + array[i];
        if (maxAtThisIndex >= currentMax) {
            currentMax = maxAtThisIndex;
        }
        if (maxAtThisIndex < 0) {
            maxAtThisIndex = 0;
        }
    };

    return currentMax
}