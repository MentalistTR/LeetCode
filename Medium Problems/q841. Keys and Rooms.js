var canVisitAllRooms = function(rooms) {
    let result = []
    let len = rooms.length
    
    for(let i = 0; i < rooms.length;i++) {
   
    if(i === rooms.length-1) return true
    else if (rooms[i] !== Number) {
    if(result.includes(i+1) === false ) {
                return false 
            }
    }
        for(let j = 0; j < rooms[i].length;j++) {
            result.push(rooms[i][j])
            if(result.includes(i+1) === false ) {
                return false 
            }
        }
    }
    return true 
    
};

canVisitAllRooms([[1],[2],[],[3]])