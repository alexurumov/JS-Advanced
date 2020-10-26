function solve() {

    const $key = document.getElementById('string').value;
    const $text = document.getElementById('text').value;
    const $result = document.getElementById('result');

    let message = $text.match(`${$key}(.+)${$key}`)[1];
    let coordinatesRegex = new RegExp(/(?<direction>east|north).*?(?<coordinates>\d{2}).*?,[^,]*?(?<decimals>\d{6})/gmi);

    let north;
    let east;
    let match = coordinatesRegex.exec($text);
    while(match) {
        if (match[1].toLowerCase() === 'east') {
            east = `${match[2]}.${match[3]} E`;
        } else {
            north = `${match[2]}.${match[3]} N`;
        }
        match = coordinatesRegex.exec($text);
    }

    let northP = document.createElement('p');
    northP.innerHTML = north;
    $result.appendChild(northP);

    let eastP = document.createElement('p');
    eastP.innerHTML = east;
    $result.appendChild(eastP);

    let messageP = document.createElement('p');
    messageP.innerHTML = `Message: ${message}`;   
    $result.appendChild(messageP);

}