/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const traverse = function (node, tmp, res) {
  if (!node) return;
  if (node && node.left === null && node.right === null) {
    tmp += tmp.length ? `->${node.val}` : node.val;
    res.push(tmp);
    return;
  }
  tmp += tmp.length ? `->${node.val}` : node.val;
  traverse(node.left, tmp, res);
  traverse(node.right, tmp, res);
};

const binaryTreePaths = function (root) {
  const res = [];
  traverse(root, '', res);
  return res;
};
