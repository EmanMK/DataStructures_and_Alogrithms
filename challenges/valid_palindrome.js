// https://leetcode.com/problems/valid-palindrome/submissions/
var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;

  while (i < s.length && j >= 0) {
    if (!/^[a-zA-Z0-9]+$/.test(s[i])) {
      i++;
      continue;
    }
    if (!/^[a-zA-Z0-9]+$/.test(s[j])) {
      j--;
      continue;
    }
    if (s[i].toUpperCase() !== s[j].toUpperCase()) return false;
    i++;
    j--;
  }
  return true;
};
