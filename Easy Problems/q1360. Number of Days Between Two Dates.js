var daysBetweenDates = function(date1, date2) {
    var start = new Date(date1);
    var end = new Date(date2);
    var timeDifference = end.getTime() - start.getTime();
    var daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return Math.abs(daysDifference);
  };