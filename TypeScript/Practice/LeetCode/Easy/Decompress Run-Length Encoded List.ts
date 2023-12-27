// https://leetcode.com/problems/decompress-run-length-encoded-list/

function decompressRLElist(nums: number[]): number[] {
    const frequencyValue: number[] = [];
    let freqIdx: number = 0;
    
    while (freqIdx < nums.length - 1) {
        for (let i = 1; i <= nums[freqIdx]; i++) {
            frequencyValue.push(nums[freqIdx+1]);
        }
        freqIdx += 2;
    }
    
    return frequencyValue;
};