var maximumUnits = function(boxTypes, truckSize) {
 let sum = 0   
 boxTypes.sort((a,b) => b[1]-a[1])

 for(let i = 0; i < boxTypes.length;i++) {
      if(truckSize - boxTypes[i][0] >= 0) {
        sum += boxTypes[i][0] * boxTypes[i][1]
        truckSize = truckSize - boxTypes[i][0]

      } else {
        sum+= truckSize * boxTypes[i][1]
        break
      }
 }

return sum 
    
};


maximumUnits([[1,3],[2,2],[3,1]],4 )