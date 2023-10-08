var middleNode = function(head) {
    var p1 = head;
    var p2 = head;
    
    while(p2 != null && p2.next != null){
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return p1;
};

middleNode([1,2,3,4,5])