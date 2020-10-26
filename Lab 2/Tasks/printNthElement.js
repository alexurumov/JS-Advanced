function printNth(arr) {

    const step = +arr.pop();

    for (let i = 0; i < arr.length; i+= step) {
        console.log(arr[i]);
    }

}

printNth(['1',  '2', '3',  '4',  '5',  '6'] );