// https://leetcode.com/problems/longest-consecutive-sequence/
var longestConsecutive = function (nums) {
  var lists = [[nums[0]]];
  let added = false;
  for (const num of nums) {
    for (let list of lists) {
      if (list[list.length - 1] == num - 1) {
        list.push(num);
        added = true;
        break;
      }
    }
    if (!added) lists.push([num]);
    added = false;
  }
  let change = false;
  do {
    change = false;

    for (let list of lists) {
      for (let listTwo of lists) {
        if (listTwo[0] - list[list.length - 1] == 1) {
          change = true;
          for (const el of listTwo) {
            list.push(el);
          }
        }
      }
    }
  } while (change);

  let length = lists[0].length;
  for (let list of lists) {
    if (list.length > length) length = list.length;
  }

  return length;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
