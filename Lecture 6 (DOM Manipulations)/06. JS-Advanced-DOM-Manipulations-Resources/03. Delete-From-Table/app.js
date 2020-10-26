function deleteByEmail() {    
    let input = document.getElementsByTagName('input')[0];
    let resultDiv = document.getElementById('result');
    let email = input.value;
    let tableBody = document.querySelector('table tbody');
    
    let found = false;
    tableBody.childNodes.forEach(tr => {
        tr.childNodes.forEach(td => {
            if (td.textContent === email) {
                tableBody.removeChild(tr);
                resultDiv.innerHTML = "Deleted."
                found = true;
            }
        })
    })
    if (!found) {
        resultDiv.innerHTML = "Not found."
    }
}