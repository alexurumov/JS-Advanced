// function heroicInventory(input) {
//     const heroData = [];
//     for (let i = 0; i < input.length; i++) {
//         const heroArgs = input[i].split(' / ');
//         let heroName = heroArgs[0];
//         let level = Number(heroArgs[1]);
//         let heroItems = [];
//         if (heroArgs.length > 2) {
//             heroItems = heroArgs[2].split(', ');
//         }
//         const hero = {
//             name: heroName,
//             level: level, 
//             items: heroItems 
//         }
//         heroData.push(hero);
//     }
//     console.log(JSON.stringify(heroData));
// }

function inventory(input) {
    return JSON.stringify(input.reduce((acc, heroString, i, arr) => {
        let [name, level, items] = heroString.split(' / ');
        acc.push({name, level: Number(level), items: items ? items.split(', ') : []});
        return acc;
    }, [])) 
}

console.log(inventory(['Isacc / 25 / Apple, GravityGun', 

'Derek / 12 / BarrelVest, DestructionSword', 

'Hes / 1 / Desolator, Sentinel, Antara'] ));