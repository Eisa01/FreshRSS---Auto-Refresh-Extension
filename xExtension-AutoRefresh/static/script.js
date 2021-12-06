'use strict';

const getNewTime = () => {
    return new Date().getTime();
};

const resetTimer = () => {
    time = getNewTime();
};

var time = getNewTime();
const initTimer = () => {
    if ('undefined' === typeof context) {
        console.log('wait');
        return setTimeout(initTimer, 50);
    }

    if (document.getElementById('nav_menu_views')) {
        const refreshRate = context.extensions["Auto Refresh"].configuration["refresh-rate"];
        setInterval(() => {
            if (getNewTime() - time >= refreshRate * 60000) {
                window.location.reload();
            }
        }, refreshRate * 30000);

        document.addEventListener("touchmove", resetTimer);
        document.addEventListener("mousemove", resetTimer);
        document.addEventListener("keypress", resetTimer);
    }
}

window.onload = () => {
    initTimer();
}
