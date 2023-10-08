// var deleteDuplicates = function(head) {

//     for(let i =0; i < head.length; i++) {
//         if(head[i] == head[i+1]) {
//          head.splice(i+1,i+1)
//         }
//     }
   
//    console.log(head)
    
// };

// deleteDuplicates([1,1]);

var deleteDuplicates = function(head) {

    let current = head;
    
    while(current && current.next) {
        if(current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next;
        }
    }
   
  return head;
}

deleteDuplicates([1,1,2,2])