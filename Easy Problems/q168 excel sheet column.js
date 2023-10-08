var convertToTitle = function(columnNumber) {

    let ans = '';

    while(columnNumber > 0) {
        console.log(columnNumber)
        --columnNumber
        let y = columnNumber % 26;
        ans = String.fromCharCode(y + 65) + ans
        columnNumber = (columnNumber - y) / 26;
    }
    return ans
};

convertToTitle(699)