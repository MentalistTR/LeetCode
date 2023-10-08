var addStrings = function(num1, num2) {
    let i = num1.length -1
    let j = num2.length -1;

    let result = [];
    let carry = 0;

    while(i >=0 || j >= 0 || carry) {
        
        let n1 = num1[i] || 0;
        let n2 = num2[j] || 0;

        let curSum = ParseInt(n1) + ParseInt(n2) + carry;
        let reminder = curSum % 10;
        result.push(reminder)
        carry = carrySum >= 10 ? 1 : 0;

        i--;
        j--;

    }
    return result.reverse().join("");

};

addStrings("9333852702227987","85731737104263")