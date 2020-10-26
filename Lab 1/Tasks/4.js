function solve(steps, stepMeters, speed) {
    let totalMeters = steps * stepMeters;
    let breaksInSecs = Math.floor(totalMeters / 500) * 60;
    let timeInSecs = Math.ceil((totalMeters / 1000) / speed * 3600);
    let totalTimeInSecs = timeInSecs + breaksInSecs;

    let hours = Math.floor(totalTimeInSecs / 3600);
    let minsAndSecs = totalTimeInSecs - (hours * 3600);
    let minutes =  Math.floor(minsAndSecs / 60);
    let secs = minsAndSecs - (minutes * 60);

    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    
}

console.log(solve(2564, 0.7, 5.5))