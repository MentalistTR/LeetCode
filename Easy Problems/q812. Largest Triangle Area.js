var largestTriangleArea = function(points) {
    result = 0

    for (a of points)
        for (b of points)
            for (c of points) {
                x1 = a[0]
                x2 = b[0]
                x3 = c[0]
                y1 = a[1]
                y2 = b[1]
                y3 = c[1]
                area = ((x2-x1)*(y3-y1)-(x3-x1)*(y2-y1))/2                
                result = Math.max(area, result)
            }

    return result
};

largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]])