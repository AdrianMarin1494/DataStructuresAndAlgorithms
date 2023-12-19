// https://leetcode.com/problems/defanging-an-ip-address/description/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const ipAddressArray = [];
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            ipAddressArray.push("[.]");
        } else {
            ipAddressArray.push(address[i]);
        }
    }
    return ipAddressArray.join("");
};