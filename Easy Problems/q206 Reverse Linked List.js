// var reverseList = function(head) {
//     if(head.length === 1) return head

//     let result = [];

//     for(let i=head.length-1;i>=0;i--) {
//         result.push(head[i])
//     }

//     console.log(result);
    
// };

// reverseList([2,1])  

/// 2. yontem /// 2. yontem/// 2. yontem/// 2. yontem/// 2. yontem

var reverseList = function(head) {

    let prev = null
    let current = head;

    while(current) {
        let next = current.next
        current.next = prev;
        prev = current
        current = next;

    }
   
   return prev
};

reverseList([1,2,3,4])  

