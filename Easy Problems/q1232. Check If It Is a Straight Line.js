var checkStraightLine = function(coordinates) {
    if(coordinates.length === 2) return true
    if(coordinates === null || coordinates[0].length === 0) return false

    let p = coordinates[0]
    let q = coordinates[1]
    let curr

    for(let i = 2;i < coordinates.lengtrh;i++) {
        curr =coordinates[i];

        if((curr[0] - p[0]) * (q[1] - p[1]) !== (curr[1] - p[1]) * (q[0] - p[0])) return false;

        }
    
   return true
};

checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])