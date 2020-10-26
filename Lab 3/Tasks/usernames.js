function usernames(input) {
    
    // const parsedData = input
    //     .reduce((acc, name) => {
    //         if (!acc.includes(name)) {
    //             acc.push(name);
    //         }
    //         return acc;
    //     }, [])

    const set = new Set(input
        .sort((a, b) => {
            if (a.length === b.length) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            }
            return a.length - b.length;
        }));

    set.forEach(name => console.log(name));

    // parsedData
    //     .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    //     .forEach(name => {
    //         console.log(name);
    //     });
}

usernames(['Ashton', 
'Kutcher', 
'Ariel', 
'Lilly', 
'Keyden', 
'Aizen', 
'Lilly', 
'Braston'] )