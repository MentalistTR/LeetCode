var findSpecialInteger = function(arr) {
    let len = arr.length
    let count = 0
    let a = 0.25
    let result = []

    for(let i = 0;i < len;i++) {
        count = 0
        for(let j = 0;j < len;j++) {
            if(arr[i] === arr[j]) {
                count++
            }
        }
        if(count/len >= a ) {
            return arr[i]
        }
    }

};

var findSpecialInteger = function(arr) {
    if (arr.length === 1) return arr[0];
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            count++;
        } else {
            count = 1;
        }
        if (count > arr.length/4) return arr[i];
    }
};