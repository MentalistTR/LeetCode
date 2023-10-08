var removeElements = function(head, val) {

    if(!head) return null;

    let current = head.next
    let prev = head;
    while(cur) {
        if(cur.val === val) {
            current = current.next;
            prev.next = current;

        } else {
            prev = current;
            current = current.next
        }
    }

    if(head.val === val) return head.next;
    return head;

};


// 2. yontem

var removeElements = function(head, val) {
    let result = [];

    for(let i =0;i < head.length;i++) {
        if(head[i] !== val) {
            result.push(head[i])
        }
    }

console.log(result)
    
};

removeElements([],6);