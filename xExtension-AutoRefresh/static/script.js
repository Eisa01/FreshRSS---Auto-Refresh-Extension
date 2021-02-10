const getNewTime = () => {
    return new Date().getTime();
};

const resetTimer = () => {
    time = getNewTime();
};

var time = getNewTime();

setInterval(function() {
    if (getNewTime() - time >= 60000) {
        window.location.reload();
    }
}, 30000);

document.addEventListener("touchmove", resetTimer);
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keypress", resetTimer);
