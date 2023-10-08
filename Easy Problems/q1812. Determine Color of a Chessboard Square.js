var squareIsWhite = function(coordinates) {
    let result = true 
    let number = coordinates[1]
    let char = coordinates[0]
  
    console.log(result)

    if(String(char) == 'a' || String(char) == 'c'|| String(char)[0] == 'e'||String(char)[0] =='g') {
        result = false 
    }
    console.log(result)

    if(number % 2 === 0) {
        if(result === true ) return false
        else if (result === false) return true 
    }
    console.log(result)

    return result

};

squareIsWhite("c7") 