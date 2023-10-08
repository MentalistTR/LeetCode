var findRelativeRanks = function (score) {
    let result=[]

    for (let i = 0; i < score.length; i++) {
        let position = 1
        for (let j = 0; j < score.length; j++) {
            
            if(score[i]<score[j]){
                position++
            }

        }

        if(position==1){
        result.push('Gold Medal')
        }
        else if(position==2){
            result.push('Silver Medal')
        }
        else if(position==3){
            result.push('Bronze Medal')
        }
        else{
            result.push(position.toString())
        }
    }
    return result

};