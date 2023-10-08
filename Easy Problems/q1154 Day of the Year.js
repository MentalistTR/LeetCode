var dayOfYear = function(date) {

    ÇÖZÜLEMEDİ  ÇÖZÜLEMEDİ ÇÖZÜLEMEDİ ÇÖZÜLEMEDİ

    let result = [];
    let sum = 0

    result.push(date.slice(0,4))
    result.push(date.slice(5,7))
    result.push(date.slice(8,10))

    console.log(result)

    if(result[1][0] == 0 && result[1][0]!= 1) {
        sum += Number(Number(result[1][1]-1) * 30)
       

    } else if(result[1][0] == 1) {
        sum += Number(result[1] * 30)
    }

    if(result[2][0] == 0) {
        sum += Number(result[2][1])
    } 
    else {
        sum += Number(result[2])
    }

   return sum

};

dayOfYear("2019-02-10")