var defangIPaddr = function(address) {
    console.log(address.split('.'))
    return address.split('.').join('[.]');
};

// 2. yontem 

var defangIPaddr = function(address) {
    var result="";
    
    for(var i=0;i<address.length;i++) {
        if(address[i] === ".")
            result += "[.]";
        else
            result += address[i];
    }
    
    return result;    
};

defangIPaddr("255.100.50.0")