// https://leetcode.com/problems/left-and-right-sum-differences/

function leftRightDifference(nums: number[]): number[] {
    let leftSum: number = 0;
    let rightSum: number = 0;
    let currentIndex: number = 0;
    let i: number = 0;
    const ans: number[] = [];

    while (currentIndex < nums.length) {
        if (i < currentIndex) {
            leftSum += nums[i];
        } else if (i > currentIndex) {
            rightSum += nums[i]
        }

        i++;
        if (i === nums.length) {
            if (leftSum >= rightSum) {
                ans.push(leftSum - rightSum);
            } else if (leftSum < rightSum) {
                ans.push(rightSum - leftSum);
            }

            leftSum = 0;
            rightSum = 0;
            currentIndex++;
            i = 0;
        }
    }

    return ans;
};