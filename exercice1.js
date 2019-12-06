var catEl = document.getElementById("cat");
let left = 0;

var startTime = new Date().getTime();

var walkTheCat = function() {

    var currTime = new Date().getTime();
    var secondsElapsed = ( ( currTime - startTime) / 1000 );
    left = left + secondsElapsed;
    catEl.style.left = left / secondsElapsed + "px";

    if(secondsElapsed < 30) {
        window.requestAnimationFrame(walkTheCat);
    }
};

window.requestAnimationFrame(walkTheCat);