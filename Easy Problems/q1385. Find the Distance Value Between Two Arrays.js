var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0

    for(let i = 0; i < arr1.length;i++) {
        let passes = true 
        for(let j = 0;j < arr2.length;j++) {
            if(Math.abs(arr1[i] - arr2[j]) <= d) {
              passes = false 
            }
        }
        if(passes) count++
    }

    return count 
    
};

// Binary search tree 

var findTheDistanceValue = function(arr1, arr2, d) {
    arr1.sort((a,b)=>a-b); arr2.sort((a,b)=>a-b);
    let count=0;
    for(let i=0; i<arr1.length; i++){
		// l: first index IN the LB. r: first index OUT of UB. 
        l=lb(arr1[i]); r=ub(arr1[i]);
        count+=(r==l);
    }
    return count;
    
    function lb(n){
        let l=0, r=arr2.length;
        while(l<r){
            let mid=l+Math.floor((r-l)/2);
            if(arr2[mid]<n-d){l=mid+1}
			else{r=mid};
        }
        return l;
    }
    function ub(n){
        let l=0, r=arr2.length;
        while(l<r){
            let mid=l+Math.floor((r-l)/2);
            if(arr2[mid]<=n+d){l=mid+1}
			else{r=mid};
        }
        return l;
    }
};