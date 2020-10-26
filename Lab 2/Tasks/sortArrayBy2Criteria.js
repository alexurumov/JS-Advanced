function sortBy2Criteria(arr) {

    return arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } 
        if (a.length < b.length) {
            return -1;
        }
        if (a.length === b.length) {
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            return 0;
        }
    }).join('\n');

}

console.log(sortBy2Criteria(['test',  

'Deny',  

'omen',  

'Default']));