var findOcurrences = function(text, first, second) {
    text = text.split(' ');
    let result = [];

    for(let i = 0;i <text.length;i++) {
        if(text[i] === first && text[i+1] === second) {
            if(i === text.length-2) {
                break
            }
            result.push(text[i+2])
        }

    }
console.log(result)
 return result 
    
};

findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk", "lnlqhmaohv","ypkk")

// 2. yontem 

var findOcurrences = function(text, first, second) {
    let results = [];
    let arr = text.split(' ');
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] === first && arr[i - 1] === second) {
            results.push(arr[i]);
        }
    }
    return results;
};