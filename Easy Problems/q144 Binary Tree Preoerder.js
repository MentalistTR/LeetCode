var preorderTraversal = function(root) {
    let empty = []
    if(root.length === 0) {
        console.log(empty)
    }

    let result = [];

    for(let i =0;i<root.length;i++) {
        if(root[i] !== null) {
            result.push(root[i]);
        }
    }
    console.log(result);
};

preorderTraversal([1,2,3,null,null,4])

// 2. YÖNTEM 2. YÖNTEM 

// var preorderTraversal = function(root) {
//     if (!root) return [];

//     const result = [];
//     const stack = [root]

//     while(stack.length) {
//         const node = stack.pop()
//         result.push(node.val);
    

//     if(node.right) {
//         stack.push(node.right);
//     }
//     if(node.left) {
//         stack.push(node.left)
//     }
//     }

//     return result;
// };