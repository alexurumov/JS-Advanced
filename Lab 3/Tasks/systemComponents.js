function systemComponents(input) {
    
    let parsedData = input.reduce((acc, curr) => {
        let [systemName, componentName, subcomponentName] = curr.split(' | ');
        if (acc[systemName]) {
            if (acc[systemName][componentName]) {
                acc[systemName][componentName] = [...acc[systemName][componentName], subcomponentName];
            } else {
                acc[systemName][componentName] = [subcomponentName];
            }
        } else {
            acc[systemName] = {[componentName]: [subcomponentName]};
        }

        return acc;
    }, {});

    Object.keys(parsedData)
        .sort((sys1, sys2) => {
            if (Object.keys(parsedData[sys1]).length === Object.keys(parsedData[sys2]).length) {
                return sys1.toLowerCase().localeCompare(sys2.toLowerCase());
            }
            return parsedData[sys2].length - parsedData[sys1].length;
        }).map(sys => {
            if (sys) {
                console.log(sys);
                Object.keys(parsedData[sys])
                    .sort((comp1, comp2) => {
                        return parsedData[sys][comp2].length - parsedData[sys][comp1].length;
                    })
                    .map(comp => {
                        console.log(`|||${comp}`);
                        parsedData[sys][comp].forEach(subcomp => {
                            console.log(`||||||${subcomp}`);
                        });
                    })
            }
        });

}

systemComponents(['SULS | Main Site | Home Page', 
'SULS | Main Site | Login Page', 
'SULS | Main Site | Register Page', 
'SULS | Judge Site | Login Page', 
'SULS | Judge Site | Submittion Page', 
'Lambda | CoreA | A23', 
'SULS | Digital Site | Login Page', 
'Lambda | CoreB | B24', 
'Lambda | CoreA | A24', 
'Lambda | CoreA | A25', 
'Lambda | CoreC | C4', 
'Indice | Session | Default Storage', 
'Indice | Session | Default Security'] );