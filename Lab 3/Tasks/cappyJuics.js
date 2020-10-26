// function cappyJuics(input) {
//     const fruits = {};
//     const bottles = {};
//     input.forEach(element => {
//         const args = element.split(' => ');
//         let fruit = args[0];
//         let quantity = Number(args[1]);
//         if (fruits[fruit]) {
//             fruits[fruit] += quantity;
//             } else {
//             fruits[fruit] = quantity;
//         }
//         let bottleQ = Math.floor(fruits[fruit] / 1000);
//         if (bottleQ > 0) {
//             bottles[fruit] = bottleQ;
//         }
//     });
//     const bottlesPairs = Object.entries(bottles);
//     for (let i = 0; i < bottlesPairs.length; i++) {
//         console.log(bottlesPairs[i].join(' => '));
//     }
// }

function juice(input) {
    let parcedData = input.reduce((acc, row) => {
        let [fruit, quantity] = row.split(' => ');
        if (acc.fruits[fruit]) {
            acc.fruits[fruit] += Number(quantity);
        } else {
            acc.fruits[fruit] = Number(quantity);
        }

        let bottleQ = Math.floor(acc.fruits[fruit] / 1000);
        if (bottleQ > 0) {
            acc.bottles[fruit] = bottleQ;
        }
        return acc;
    }, { fruits: {}, bottles: {} }).bottles;

    let kvps = Object.entries(parcedData);
    kvps.forEach(kvp => {
        console.log(kvp.join(' => '));
    });
}

juice( ['Kiwi => 234', 

'Pear => 2345', 

'Watermelon => 3456', 

'Kiwi => 4567', 

'Pear => 5678', 

'Watermelon => 6789'] );