function solve() {
    let optionList = document.getElementById("selectMenuTo");
    let button = document.getElementsByTagName('button')[0];
    let input = document.getElementById('input');

    let option1 = document.createElement('option');
    option1.value = 'hexadeicmal';
    option1.innerHTML = 'Hexadeicmal'
    optionList.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = 'binary';
    option2.innerHTML = 'Binary'
    optionList.appendChild(option2);

    button.addEventListener('click', () => {
        
        let result;
        if (optionList.value === "binary") {
            result = (Number(input.value)).toString(2);
        } else {
            result = (Number(input.value)).toString(16).toUpperCase();
        }
        document.getElementById('result').value = result;
    })
} 