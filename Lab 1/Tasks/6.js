function solve(arr) {
    let speed = arr[0];
    let area = arr[1];

    let limit;
    switch (area) {
        case 'motorway': limit = 130;
        break;
        case 'interstate': limit = 90;
        break;
        case 'city': limit = 50;
        break;
        case 'residential': limit = 20;
        break;
    }

    let result;
    if (speed - limit > 40) {
        result = 'reckless driving';
    } else if (speed - limit > 20) {
        result = 'excessive speeding';
    } else if (speed - limit > 0) {
        result = 'speeding';
    } else {
        result = '';
    }

    return result;
}

console.log(solve([200, 'motorway']));