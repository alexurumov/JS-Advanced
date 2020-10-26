function attachEventsListeners() {

    const $days = document.getElementById('days');
    const $hours = document.getElementById('hours');
    const $minutes = document.getElementById('minutes');
    const $seconds = document.getElementById('seconds');
    const $daysBtn = document.getElementById('daysBtn');
    const $hoursBtn = document.getElementById('hoursBtn');
    const $minutesBtn = document.getElementById('minutesBtn');
    const $secondsBtn = document.getElementById('secondsBtn');

    const buttons = [$daysBtn, $hoursBtn, $minutesBtn, $secondsBtn];

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
        if ($days.value) {
            console.log('days');
            $hours.value = $days.value * 24;
            $minutes.value = $days.value * 1440;
            $seconds.value = $days.value * 86400;
        }
        if ($hours.value) {
            $days.value = $hours.value / 24;
            $minutes.value = $hours.value * 60;
            $seconds.value = $hours.value * 360;
        }
        if ($minutes.value) {
            $days.value = $minutes.value / 1440;
            $hours.value = $minutes.value / 60;
            $seconds.value = $minutes.value * 60;
        }
        if ($seconds.value) {
            $days.value = $seconds.value / 86400;
            $hours.value = $seconds.value / 360;
            $minutes.value = $seconds.value / 60;
        }
        })
    });
}