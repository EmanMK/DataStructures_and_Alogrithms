/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hashMap = new Map();
  for (const num of nums) {
    if (!hashMap.has(num)) {
      hashMap.set(num, 1);
      continue;
    }
    hashMap.set(num, hashMap.get(num) + 1);
  }

  console.log(hashMap)
  const entries = new Map([...hashMap.entries()].sort((a, b) => b[1]-a[1] ));
  console.log(entries)
  return [...entries.keys()].slice(0, k);
};

topKFrequent([4,1,-1,2,-1,2,3], 2);
