function subtract() {
    const $firstEl = document.getElementById('firstNumber');
    const $secondEl = document.getElementById('secondNumber');
    const $resultEl = document.getElementById('result');

    $resultEl.textContent = +$firstEl.value - +$secondEl.value;
}