var buddyStrings = function(s, goal) {
    
if(s.length !== goal.length || s.length <= 1) return false
if(s === goal) return false

let buddy = [];

for(let i =0;i < s.length;i++) {
    if(s[i] !== goal[i]) {
        buddy.push[i];
    }
}


if(buddy.length !== 2) return false
if(s[buddy[0]] !== goal[buddy[1]] || s[buddy[1]] !== goal[buddy[0]]) {
    return false 
}

return true 

   

    
    
};

buddyStrings("ab","ba")