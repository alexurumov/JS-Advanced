function argsInfo(...args) {
    const obj = {};

    args.forEach(x => {
        let argType = typeof x;
        console.log(`${argType}: ${x}`);

        if (!obj[argType]) {
            obj[argType] = 1;
        } else {
            obj[argType] += 1;
        }
    })

    Object.keys(obj)
        .sort((a, b) => obj[b] - obj[a])
        .forEach(x => {
            console.log(`${x} = ${obj[x]}`);
        })
}

argsInfo('cat', 42, function () { console.log('Hello world!'); } );