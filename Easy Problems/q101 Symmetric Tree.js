var isSymmetric = function(root)  {
    let res = true;

    function helper(node1,node2) {
        if(!node1 && !node2) {
            return;
        }
        if(!node1 || !node2 || node1.val !== node2.val) {
            res = false;
            return;
        }
        helper(node1.left,node2.right);
        helper(node1.right,node2.left)
    }
    helper(root,root);
    return res;

};

   
