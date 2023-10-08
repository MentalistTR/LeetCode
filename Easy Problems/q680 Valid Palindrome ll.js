var validPalindrome = function(s) {

 let leftPointer = 0;
 let rightPointer = s.length -1;
 while(leftPointer < rightPointer) {
    if(s[leftPointer] !== s[rightPointer]) {
        const checkleft = checkInnerPalindrome(leftPointer + 1,rightPointer,s)
        const checkRight = checkInnerPalindrome(leftPointer,rightPointer -1,s)
        return checkleft || checkRight
    }
    leftPointer++
    rightPointer--
 }

 return true;
    
};

var checkInnerPalindrome = function(leftPointer,rightPointer,s) {
    while(leftPointer < rightPointer) {
        if(s[leftPointer] !== s[rightPointer]) {
            return false
        }
        leftPointer++;
        rightPointer--;
    }
    return true
}

validPalindrome("abca")