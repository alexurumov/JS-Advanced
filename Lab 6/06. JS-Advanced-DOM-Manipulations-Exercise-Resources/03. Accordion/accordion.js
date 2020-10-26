function toggle() {
    const $extra = document.getElementById('extra');
    const $btn = document.getElementsByClassName('button')[0];

    if ($btn.textContent === 'More') {
        $btn.textContent = 'Less';
        $extra.style.display = 'block';
    } else {
        $btn.textContent = 'More';
        $extra.style.display = 'none';
    }
}