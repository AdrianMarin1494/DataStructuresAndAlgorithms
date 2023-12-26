// https://leetcode.com/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteArray = ransomNote.split("");
    let magazineArray = magazine.split("");
  
    for (let i of ransomNoteArray) {
      if (!magazineArray.includes(i)) {
        return false;
      }
      magazineArray.splice(magazineArray.indexOf(i), 1)
    }
    return true;
  }