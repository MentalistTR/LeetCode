var isPathCrossing = function(path) {

    let coordinates = new Map();
    coordinates.set('0,0', '');
    let x = 0;
    let y=0;

    for(let i=0; i<path.length; i++){
      if(path[i] === 'N') y++;
      else if(path[i] === 'S') y--;
      else if(path[i] === 'E') x++;
      else if(path[i] === 'W') x--;
      let point =[x,y].join(',');
      if(coordinates.has(point)) return true;
      coordinates.set(point, path[i]);
    }
    return false;
};