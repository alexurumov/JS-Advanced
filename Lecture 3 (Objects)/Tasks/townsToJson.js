function towns(input) {

    const table = [];

    for (let i = 1; i < input.length; i++) {
        const elements = input[i].split('|');
        let town = elements[1].trim();
        let lat = Number(elements[2].trim()).toFixed(2);
        let long = Number(elements[3].trim()).toFixed(2);
        
        const rowObj = {};
        rowObj.Town = town;
        rowObj.Latitude = +lat;
        rowObj.Longitude = +long;

        table.push(rowObj);
    }
    
    return JSON.stringify(table);

}

console.log(towns( 
    ['| Town | Latitude | Longitude |', 

'| Veliko Turnovo | 43.0757 | 25.6172 |', 

'| Monatevideo | 34.50 | 56.11 |'] 

 ));