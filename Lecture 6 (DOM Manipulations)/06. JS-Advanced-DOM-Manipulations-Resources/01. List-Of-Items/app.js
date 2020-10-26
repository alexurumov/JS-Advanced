function addItem() {
    let ul = document.getElementById('items');
    let btn = document.getElementsByTagName('input')[1];
    let input = document.getElementById('newItemText');

    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";
}