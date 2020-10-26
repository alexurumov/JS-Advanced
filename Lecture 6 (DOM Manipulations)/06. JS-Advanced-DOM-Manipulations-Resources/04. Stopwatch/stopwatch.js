function stopwatch() {
    let time = document.getElementById('time');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    let totalTime = 0;
    let stratTime;
    startBtn.addEventListener('click', (e) => {
        startTime = setInterval(() => {time.innerHTML = `00:0${totalTime++}`}, 1000);
        startBtn['disabled'] = 'disabled';
        stopBtn['disabled'] = false;
    });

    stopBtn.addEventListener('click', (e) => {
        clearInterval(startTime);
        totalTime = 0;
        time.innerHTML = '00:00';
        startBtn['disabled'] = false;
        stopBtn['disabled'] = 'disabled';
    });
}