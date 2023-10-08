var imageSmoother = function(img) {
    let returnArray = [];

    for(let r = 0; r < img.length;r++) {
        let row = [];

        for(let c = 0; c < img[r].length;c++) {
            let cellSum = 0;
            let cellCount= 0;

            for(let filtR = r -1;filtR <=r+1;filtR++) {
                if(filtR < 0 || filtR >= img.length) {
                    continue;
                }
                    for(let filtC =c-1;filtC <= c +1; filtC++) {
                        if(filtC < 0 || filtC >= img[r].length) {
                            continue;
                        }
                        cellSum += img[filtR][filtC];
                        cellCount++

                    }
                
            }
            row.push(Math.floor(cellSum / cellCount))
        }
        returnArray.push(row)
    }

    return returnArray;
};