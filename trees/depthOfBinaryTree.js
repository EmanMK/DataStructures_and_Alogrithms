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
var maxDepth = function(root) {
    let leftDepth =0;
    let rightDepth =0;

    if(root){
        if(root.left) leftDepth = maxDepth(root.left)
        if(root.right) rightDepth = maxDepth(root.right)
        
        if(leftDepth>rightDepth) return 1 + leftDepth;
        return 1 + rightDepth;
    }
    return 0;
};