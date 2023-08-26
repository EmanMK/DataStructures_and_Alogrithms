// https://leetcode.com/problems/longest-consecutive-sequence/
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let currentLength = 0;
  let longest = 0;
  for (const num of nums) {
    if (!sum.has(num - 1)) {
      currentLength = 0;
      while (set.has(num + currentLength)) {
        currentLength += 1;
      }
      if (longest < currentLength) longest = currentLength;
    }
  }
  return longest;
};
