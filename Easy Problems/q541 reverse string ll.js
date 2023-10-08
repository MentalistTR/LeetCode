var reverseStr = function(s, k) {

let result = '';

for(let i =0; i<s.length; i+= 2*k) {
    let start = i;
    let end = Math.min(i+k,s.length);
    let positive = s.slice(start,end);
    let reversedPositive = positive.split("").reverse().join("");
    result += reversedPositive + s.slice(end,i+2*k)
}

return result;
  
};

reverseStr( "abcdefg",2);

