/**
 * @param {number[]} nums
 * @return {boolean}
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  isExist(val) {
    if (this.head === null) {
      return false;
    }
    let node = this.head;
    const notFound = true;
    while (notFound) {
      if (node.value === val) {
        return true;
      } else {
        node = node.next;
        if (node === null) {
          return false;
        }
      }
    }
  }
}

var containsDuplicate = function (nums) {
  let hashTable = new Array(50).fill(null);
  for (const elm of nums) {
    let elemIndex;
    elm > 0 ? (elemIndex = elm % 50) : (elemIndex = (elm * -1) % 50);

    if (hashTable[elemIndex] === null) {
      hashTable[elemIndex] = new LinkedList();
    }

    if (hashTable[elemIndex].isExist(elm)) {
      return true;
    } else {
      const node = new Node(elm);
      hashTable[elemIndex].push(node);
    }
  }
  return false;
};

console.log(containsDuplicate([1, 5, 8, 1]));
