/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root, max = -95658564) {
  let count = 0;
  if (root) {
    if (root.val >= max) {
      max = root.val;
      count += 1;
    }
    console.log("root.value: ", root.val);
    console.log("count: ", count);
    console.log("max:", max);

    count += goodNodes(root.left, max);
    count += goodNodes(root.right, max);
  }
  return count;
};

const bla = `{"val":3,"left":{"val":1,"left":{"val":3,"left":null,"right":null},"right":null},"right":{"val":4,"left":{"val":1,"left":null,"right":null},"right":{"val":5,"left":null,"right":null}}}`;
const root = JSON.parse(bla);
console.log(goodNodes(root));
