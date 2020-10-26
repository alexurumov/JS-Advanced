function addItem() {
    let ul = document.getElementById('items');
    let btn = document.getElementsByTagName('input')[1];
    let input = document.getElementById('newText');

    let li = document.createElement('li');
    li.innerHTML = `${input.value} [<a href="#">Delete</a>]`;
    ul.appendChild(li);
    input.value = "";

    ul.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName == 'A') {
            ul.removeChild(e.target.parentNode);
        }
    })
}