// const mergeTwoLists = function(list1,list2) {
    
//     let result
//     list1.sort(function(a,b){return a-b});
//     list2.sort(function(a,b){return a-b});

//     result = list1.concat(list2);
//     result.sort(function(a,b) {return a-b})
    
//     return result;
// }

// mergeTwoLists([1,3,2],[1,2]);

// 2. YÖNTEM  2. YÖNTEM 2. YÖNTEM 2. YÖNTEM 2. YÖNTEM 2. YÖNTEM 

    var mergeTwoLists = function(l1, l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
        return l1
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2
        }
    };

mergeTwoLists([1,2,4],[1,3,4])