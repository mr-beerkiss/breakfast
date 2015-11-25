window.onload = function(e) {
    var now = Date.now();
    var relevantDates = dates.filter(function(a) { return a.date.getTime() > now });

    var thisWeek = relevantDates.shift();
    var nextWeek = relevantDates.shift();

    document.querySelector('.this-supplier').innerHTML = formatSupplier(thisWeek);
    document.querySelector('.next-supplier').innerHTML = formatSupplier(nextWeek);
};

function formatSupplier(data) {
    return data.name + "<br/>" + data.date.getDate() + "/" + (data.date.getMonth()+1) 
        + "/" + data.date.getFullYear();
}