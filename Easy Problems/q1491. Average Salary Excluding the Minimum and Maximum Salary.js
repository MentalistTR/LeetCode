var average = function(salary) {
    let sum = 0
    salary.sort((a,b) => a-b)
    let k = salary.length -2
   
    for(let i = 1;i < salary.length-1;i++) {
        sum += salary[i]
        console.log(sum)
    }
    sum = sum/k
    console.log(sum)
   
    return sum 
   
       
   };

   average([4000,3000,1000,2000])