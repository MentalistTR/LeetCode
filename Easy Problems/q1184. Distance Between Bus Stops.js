var distanceBetweenBusStops = function(distance, start, destination) {
    let clockwise = 0
    let totalDistance = 0

    for(let i = 0;i < distance.length;i++) {
        if(start < destination && (i >= start && i < destination)) {
            clockwise += distance[i]
        }
        if(start > destination && (i >= start || i < destination)) {
            clockwise += distance[i]
        }
        totalDistance += distance[i];

    }

    return Math.min(clockwise,totalDistance-clockwise)

};

distanceBetweenBusStops([1,2,3,4], 0, 2)