function solve() {
    let pad = document.getElementsByClassName('keys')[0];
    let output = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');
    let clearButton = document.getElementsByClassName('clear')[0];

    let operands = ['+', '-', '*', '/'];

    let operations = {
        '+': (a, b) => Number(a) + Number(b),
        '-': (a, b) => Number(a) - Number(b),
        '*': (a, b) => Number(a) * Number(b),
        '/': (a, b) => Number(a) / Number(b)
    };

    clearButton.addEventListener('click', (e) => {
        output.innerHTML = '';
        result.innerHTML = '';
    });

    pad.addEventListener('click', ({target: {value} }) => {
        if (!value) {
            return;
        } 

        if (value === '=') {
            let params = output.innerHTML.split(' ');
            if (!params[2] || params[2] === undefined) {
                result.innerHTML = 'NaN';
                return;
            }
            result.innerHTML = operations[params[1]](params[0], params[2]);
            return;
        }

        if (operands.includes(value)) {
            output.innerHTML += ` ${value} `;
            return;
        }
        output.innerHTML += value;
    })
}