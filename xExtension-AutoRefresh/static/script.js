var time = new Date().getTime();
$(document).bind("touchmove mousemove keypress", function () {
    time = new Date().getTime();
});

setInterval(function() {
    if (new Date().getTime() - time >= 60000) {
        window.location.reload(true);
    }
}, 30000);