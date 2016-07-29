'use strict';
window.onload = function(e) {
    var now = Date.now();
    var relevantDates = dates.filter(function(a) { 
        var nextDate = new Date(a.date);
        return nextDate.getTime() > now 
    });

    var thisWeek = relevantDates.shift();
    var nextWeek = relevantDates.shift();

    document.querySelector('.this-supplier').innerHTML = formatSupplier(thisWeek);
    document.querySelector('.next-supplier').innerHTML = formatSupplier(nextWeek);
};

function formatSupplier(data) {

    var date = new Date(data.date);

    var formattedDate = '';

    if ( date.getDate() < 10 ) formattedDate += '0';
    formattedDate += date.getDate();
    formattedDate += '/';
    if ( date.getMonth()+1 < 10 ) formattedDate += '0';
    formattedDate += (date.getMonth()+1);
    formattedDate += '/';
    formattedDate += date.getFullYear();

    return data.name + "<br/>" + formattedDate;
}