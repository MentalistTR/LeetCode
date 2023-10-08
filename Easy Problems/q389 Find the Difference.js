var findTheDifference = function(s, t) {
    
    let sArray = s.split("").sort()
    let tArray = t.split("").sort()

    console.log(sArray)
    console.log(tArray)
 
    for(let i = 0; i < tArray.length; i++){
        if(sArray[i] !== tArray[i]) return tArray[i]
    }
    
    return ""
}

findTheDifference("ae","aea")