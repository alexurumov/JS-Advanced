function solve() {

    let program1 = {name: 'program1', weight: 50};
    let program2 = {name: 'program2', weight: 50};
    let program3 = {name: 'program2', weight: 50};
    let program4 = {name: 'program1', weight: 50};

    let arr = [];
    arr.push(program1);
    arr.push(program2);
    arr.push(program3);
    arr.push(program4);

    console.log(arr);

    let index = arr.findIndex(pr => pr.name === 'program');

    console.log(index);

    arr.splice(index, 1);

    console.log(arr);
}

solve();