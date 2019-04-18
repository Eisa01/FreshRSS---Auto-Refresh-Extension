var time = new Date().getTime();

$(document).on("touchmove mousemove keypress", function () {
    time = new Date().getTime();
});

setInterval(function() {
    if (new Date().getTime() - time >= 60000) {
		$('#actualize').trigger('click');
    }
}, 30000);
