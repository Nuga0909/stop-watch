window.onload = function () {
    const appendTens = document.getElementById("tens")
    const appendSeconds = document.getElementById("seconds")
    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');
    const appendMins = document.getElementById('mins');
    let Interval;

    let seconds = 0o0;
    let tens = 0o0;
    let mins = 0o0;

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        } else
            appendTens.innerHTML = tens;

        if (tens >= 99) {
            seconds++;
            tens = 0o0;
            if (seconds <= 9) {
                appendSeconds.innerHTML = "0" + seconds;
            } else
                appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            appendMins.style.display = 'inline-block';
            mins++;
            seconds = 0o0;
            if (mins <= 9) {
                appendMins.innerHTML = "0" + mins + ":";
            } else
                appendMins.innerHTML = mins + ":";
        }
    }

    buttonStart.onclick = function () {
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);

        appendTens.innerHTML='00';
        appendSeconds.innerHTML='00';
        appendMins.style.display = 'none';
    }

}
