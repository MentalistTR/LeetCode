var calPoints = function(operations) {
    let sum = 0;
    let array = [];

    for(let i =0;i < operations.length;i++) {
        if (operations[i] != 'C' && operations[i] != 'D' && operations[i] != '+') {
            let value = parseInt(operations[i])
            array.push(value)
        }
        if(operations[i] == "C") {
            array.pop();
        }
       else if(operations[i] === "+" ) {
           let newValue = array[array.length-1] + array[array.length -2]
           array.push(newValue)
           
        }
      else  if(operations[i] == "D") {
           let value = array[array.length -1] * 2
           array.push(value)
        }
      
    }
    
    for(let j = 0;j<array.length;j++) {
        sum += array[j]
    }
return sum
};

calPoints(["5","2","C","D","+"])