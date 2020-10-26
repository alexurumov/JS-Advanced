function focus() {
    let div = document.getElementsByTagName('div')[0];

    div.addEventListener('focus', (event) => {
        if (event.target && event.target.nodeName === "INPUT") {
            event.target.focus();
            let currentDiv = event.target.parentNode;
            currentDiv.classList.add("focus");
        }
    });
}