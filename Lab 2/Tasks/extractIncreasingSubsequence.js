function extractIncreasingSub(arr) {

    let result = arr.reduce((acc, curr) => {
        
        const lastElemenet = acc[acc.length - 1];

        if (curr  >= lastElemenet || lastElemenet === undefined) {
            acc.push(curr);
        }

        return acc;

    }, []);

    result.forEach(x => console.log(x));
}

extractIncreasingSub([1, 2, 8, 4, 5]);