function sortArr(arr, criteria) {
    
    switch(criteria) {
        case 'asc': return arr.sort((a, b) => a - b); break;
        case 'desc': return arr.sort((a, b) => b - a); break;
    }

};

console.log(sortArr([14, 7, 17, 6, 8], 'asc' ));

