function rotateArray(arr) {

    let step = +arr.pop();
    step %= arr.length;

    for (let i = 0; i < step; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');

}

console.log(rotateArray( ['Banana',  

'Orange',  

'Coconut',  

'Apple',  

'15']   ));