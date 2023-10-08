var findComplement = function(num) {

    let value = num.toString(2);
    let newValue = "";

    for(let i = 0;i < value.length;i++) {
        if(value[i] === "0") {
            newValue += "1";
        } 
        else {
            newValue += "0";
        }
    }
     console.log(newValue)
     console.log(parseInt(newValue,2))
   return parseInt(newValue,2)
};

findComplement(24)