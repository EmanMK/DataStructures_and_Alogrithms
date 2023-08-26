function merge(arrayOne, arrayTwo) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      mergedArray.push(arrayOne[i]);
      i++;
    } else {
      mergedArray.push(arrayTwo[j]);
      j++;
    }
  }
  while (i < arrayOne.length) {
    mergedArray.push(arrayOne[i]);
    i++;
  }
  while (j < arrayTwo.length) {
    mergedArray.push(arrayTwo[j]);
    j++;
  }

  return mergedArray;
}
function mergeSort(list) {
  if (list.length == 1) {
    return list;
  }

  const midpoint = Math.ceil(list.length / 2);
  let firstHalf = list.slice(0, midpoint);
  let secondHalf = list.slice(midpoint, list.length);

  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);
  const result = merge(firstHalf, secondHalf);

  return result;
}
// console.log(merge([0, 5, 7], [1, 2, 3, 6, 8]));
console.log(mergeSort([0, 8, 5, 4, 7, 1, 3, 2, 9, 6]));
