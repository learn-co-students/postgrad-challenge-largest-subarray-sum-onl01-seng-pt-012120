
// kadane's algorithm

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
    // code to write here
    let currentSum = 0
    let  largestSum = 0
    for(let i = 0; i < array.length; i++){
        let currentNum = array[i]
        currentSum = Math.max((currentSum + currentNum), 0)

        largestSum = Math.max(currentSum, largestSum)

    }
    
   return largestSum
}

//   function stringIncludes(word, letter){
//     let matches;
//     for(let i = 0; i < word.length; i++){
//       if(word[i] === letter){
//         matches = true
//       }
//     }
//     return !!matches
//   }
 