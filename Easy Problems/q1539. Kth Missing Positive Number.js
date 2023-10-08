var findKthPositive = function(arr, k) {
    let hashmap = new Map()

    for(let i = 0; i < arr.length;i++) {
        hashmap.set(arr[i],1)
    }
    let count = 0
    let number = 0

    while( count < k) {
        number++
        if(!hashmap.get(number)) {
            count++
            if(count == k) {
                return number 
            }
        }

    }

    
};

var findKthPositive = function(arr, k) {
    let miscount = 0;
for(let i=1,j=0; i<=arr.length+k;i++){
 if(arr[j] && arr[j]===i){
     j++;
 }else{
     miscount++;
     if(miscount===k){
         return i
     }
 }
}
};