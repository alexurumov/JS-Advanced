function addRemove(arr) {

    const resultArr = [];

    let number = 1;

    arr.forEach(element => {
       if (element === 'add') {
           resultArr.push(number);
       } else {
           resultArr.pop();
       }
       number++;
    });

    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        resultArr.forEach(el => console.log(el));
    }

}

addRemove( ['remove',  

'remove',  

'remove']  )