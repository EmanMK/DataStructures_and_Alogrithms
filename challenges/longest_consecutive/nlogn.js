/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/longest-consecutive-sequence/
function merge(listOne, listTwo) {
  let i = 0,
    j = 0;
  let sortedList = [];

  while (i < listOne.length && j < listTwo.length) {
    if (listOne[i] < listTwo[j]) {
      sortedList.push(listOne[i]);
      i++;
    } else {
      sortedList.push(listTwo[j]);
      j++;
    }
  }
  while (i < listOne.length) {
    sortedList.push(listOne[i]);
    i++;
  }
  while (j < listTwo.length) {
    sortedList.push(listTwo[j]);
    j++;
  }

  return sortedList;
}
function mergeSort(nums) {
  if (nums.length == 1) {
    return nums;
  }

  let m = Math.floor(nums.length / 2);
  let leftList = mergeSort(nums.slice(0, m));
  let rightList = mergeSort(nums.slice(m));

  return merge(leftList, rightList);
}

var longestConsecutive = function (nums) {
  let sortedList = mergeSort(nums);
  let longestConsecutive = 0;
  let currentCons = 0;
  for (let i = 1; i < sortedList.length; i++) {
    if (sortedList[i] - sortedList[i - 1] == 1) {
      currentCons += 1;
    } else if (sortedList[i - 1] == sortedList[i]) {
      continue;
    } else {
      if (longestConsecutive < currentCons) longestConsecutive = currentCons;
      currentCons = 0;
    }
  }
  if (longestConsecutive > 0) return longestConsecutive + 1;
  return 0;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
