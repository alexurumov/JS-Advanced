function solve() {
    let lis = document.getElementsByTagName('li');
    let input = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', (e) => {
        let index = input.value.toLocaleUpperCase().charCodeAt(0) - 65;
        let li = lis[index];
        if (li.innerHTML === '') {
            li.innerHTML = '' + input.value.charAt(0).toUpperCase() + input.value.toLowerCase().slice(1);
        } else {
            li.innerHTML += `, ${input.value.charAt(0).toUpperCase() + input.value.toLowerCase().slice(1)}`;
        }
        input.value = '';
    })
}