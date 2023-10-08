var dayOfTheWeek = function(day, month, year) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    const d = new Date(year + '-' + month + '-' + day)
    
    let result = weekday[d.getDay()]

    return result
};