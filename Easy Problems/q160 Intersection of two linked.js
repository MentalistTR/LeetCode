var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;

    let hA = headA;
    let hB = headB;

    while(hA != hB) {

        hA = hA ? hA.next : headB;
        hB = hB ? hB.next : headA;
    }
    return hA;

};
    


getIntersectionNode([4,1,8,4,5],[5,6,1,8,4,5])