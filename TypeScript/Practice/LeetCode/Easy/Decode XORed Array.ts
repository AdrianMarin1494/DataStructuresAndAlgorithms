// https://leetcode.com/problems/decode-xored-array/description/

function decode(encoded: number[], first: number): number[] {
    const decoded: number[] = [first];

    for (let i = 0; i < encoded.length; i++) {
        decoded.push(encoded[i] ^ decoded[i]);
    }

    return decoded;
};