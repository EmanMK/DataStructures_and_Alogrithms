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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let tempLeft = new TreeNode();
    if(root){
        tempLeft = root.left;

        root.left =  root.right;
        root.right = tempLeft;

        root.left =  invertTree(root.left);
        root.right = invertTree(root.right);
    }
    return root;
};



// {"val":4,"left":{"val":2,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}},"right":{"val":7,"left":{"val":6,"left":null,"right":null},"right":{"val":9,"left":null,"right":null}}}