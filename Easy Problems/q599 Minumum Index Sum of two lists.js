var findRestaurant = function(list1, list2) {
    let sum = 0;
   
    for(let i = 0;i < list1.length;i++) {
        for(let j =0;j < list2.length;j++) {
            if(list1[i] === list2[j]) {
             sum = i + j
            }
        }
    }
    
};