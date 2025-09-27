/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const ans = numbers.reduce((largest, curr)=>{
        if(curr>largest){
            largest=curr
        }
        return largest
    },numbers[0])

    return ans
}

module.exports = findLargestElement;