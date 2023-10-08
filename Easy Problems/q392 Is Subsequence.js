var isSubsequence = function(s, t) {

let i= 0;
let j =0;

while(i < s.length && j < t.length) {
    if(s.charAt(i) == t.charAt(j)) {
        i++
    }
    j++
}

if(i == s.length) return true;




return false;







}
isSubsequence("acb","ahbgdc")