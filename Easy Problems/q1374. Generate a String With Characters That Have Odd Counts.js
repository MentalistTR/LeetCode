var generateTheString = function(n) {
    let map = ["a","b"]
    let output = ""
    
    for(let i = 0;i <n-1;i++) {
        output += map[0]
    }
    if(n % 2 ===0) output += map[1]
    else output+=map[0]
    return output
    
};

// 2.  yontem 

var generateTheString = function(n) {
    const target = Array(n - 1).fill('a').join('');
    return n % 2 === 0 ? target + 'b' : target + 'a';
};

// 3. yontem 

function generateTheString(n) {
    return 'a'.repeat(n - 1) + (n % 2 ? 'a' : 'b');
  }