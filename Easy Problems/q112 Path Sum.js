var hasPathSum = function(root, sum) {

    let res = false;

    function helper(node, currentsum) {
        if(!node || res) {
            return;
        }

        currentsum += node.val;

        if(!node.left && !node.right && currentsum === sum) {
            res = true;
        }

        helper(node.left,currentsum)
        helper(node.right,currentsum)

    }

    helper(root,0);
    return res;
}