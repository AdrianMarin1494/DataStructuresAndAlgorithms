// Radix sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements
// It exploits the fact that information about the size of a number is encoded in the number of digits
// More digits means a bigger number

// Radix sort helpers
// get digit
// function getDigit(num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }
// console.log(getDigit(7323, 2));

// Radix sort digitCount 
// function digitCount(num) {
//     if (num === 0) {
//         return 1;
//     }
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }
// console.log(digitCount(423));

// Radix sortmostDigits
// function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//     }
//     return maxDigits;
// }

// console.log(mostDigits([0, 3, 55, 737, 12345]));

// Radix sort pseudocode
// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop:
// - create buckets for each digit (0 to 9)
// - place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going to 9
// Return list at the end

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([12, 9852, 23, 345, 2345, 5467]));

// digitBuckets:  [
//     [],
//     [],
//     [ 12, 9852 ],
//     [ 23 ],
//     [],
//     [ 345, 2345 ],
//     [],
//     [ 5467 ],
//     [],
//     []
//   ]
//   nums:  [ 12, 9852, 23, 345, 2345, 5467 ]
//   digitBuckets:  [
//     [],
//     [ 12 ],
//     [ 23 ],
//     [],
//     [ 345, 2345 ],
//     [ 9852 ],
//     [ 5467 ],
//     [],
//     [],
//     []
//   ]
//   nums:  [ 12, 23, 345, 2345, 9852, 5467 ]
//   digitBuckets:  [
//     [ 12, 23 ],
//     [],
//     [],
//     [ 345, 2345 ],
//     [ 5467 ],
//     [],
//     [],
//     [],
//     [ 9852 ],
//     []
//   ]
//   nums:  [ 12, 23, 345, 2345, 5467, 9852 ]
//   digitBuckets:  [
//     [ 12, 23, 345 ],
//     [],
//     [ 2345 ],
//     [],
//     [],
//     [ 5467 ],
//     [],
//     [],
//     [],
//     [ 9852 ]
//   ]
//   nums:  [ 12, 23, 345, 2345, 5467, 9852 ]

// BigO
// n - length of array
// k - number of digits (average)
// Time Complexity
// Best: O(nk)
// Average: O(nk)
// Worst: O(nk)
// Space Complexity: O(n + k)