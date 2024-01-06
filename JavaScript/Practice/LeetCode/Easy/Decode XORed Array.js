// https://leetcode.com/problems/decode-xored-array/description/

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const decoded = [first];

    for (let i = 0; i < encoded.length; i++) {
        decoded.push(encoded[i] ^ decoded[i]);
    }

    return decoded;
};