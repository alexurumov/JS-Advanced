function solve() {

	let $input = document.getElementById('input').value;
	let $result = document.getElementById('resultOutput');
	
	let weight = $input.split('').map(Number).reduce((acc, curr) => acc + curr, 0);
	
	while(weight > 9) {
		weight = weight.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0);
	}
	
	let trimmedString = $input.slice(weight, $input.length - weight);

	let chars = [];
	for (let i = 0; i < Math.ceil(trimmedString.length / 8); i++) {
		chars.push(String.fromCharCode(parseInt(trimmedString.slice(i * 8, (i + 1) * 8), 2)));
	}
	
	$result.textContent = chars.filter(x => x.match(/[A-Za-z ]/)).join('');

}