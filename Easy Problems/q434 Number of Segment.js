var countSegments = function(s) {

    return s.split(" ").filter(x => x !== "").length;
    
};

countSegments("");