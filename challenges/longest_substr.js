/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0,
    curLength = 0,
    i = 0;
  let hashMap = new Map();

  while (i < s.length) {
    if (!hashMap.has(s[i])) {
      hashMap.set(s[i], i);
      curLength += 1;
      if (longest < curLength) longest = curLength;
      i++;
    } else {
      i = hashMap.get(s[i]) + 1;
      hashMap.clear();
      curLength = 0;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring("dvdf"));
