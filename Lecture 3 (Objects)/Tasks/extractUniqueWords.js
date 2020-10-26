function extractUniqueWords(input) {

    const uniqueWords = [];

    for (let i = 0; i < input.length; i++) {
        const words = input[i].match(/\w+/g);
        words.forEach(word => {
            if (!uniqueWords.includes(word.toLowerCase())) {
                uniqueWords.push(word.toLowerCase());
            }
        });
    }

    return uniqueWords.join(', ');

}

console.log(extractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',  

'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',  

'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',  

'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',  

'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',  

'Integer ac turpis commodo, varius nulla sed, elementum lectus.',  

'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'] ));