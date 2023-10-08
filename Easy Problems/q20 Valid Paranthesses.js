const isValid = function(s) {

    let conditions = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let heap = [];
    
    for(let char of s){

        if(conditions[char]) {
            heap.push(conditions[char])
        } else {
            if(heap.pop() !== char) return false
        }
       
    }
    
    return (!heap.length);
   

 }

isValid(['(','{',')'])