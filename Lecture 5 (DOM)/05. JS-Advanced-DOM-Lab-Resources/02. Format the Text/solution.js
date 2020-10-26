function solve() {

  let inputText = document.getElementById('input').innerHTML;
  const inputArr = inputText.split('.');

  let pCount = (inputArr.length / 3) + 1;

  for (let i = 0; i < pCount; i++) {
    let p = document.createElement('p');
    for (let j = 0; j < 3; j++) {
      let sentence = inputArr.shift();
      if (sentence) {
        p.innerHTML += `${sentence}.`;
      }      
    }
    document.getElementById('output').appendChild(p);
  }
  
}
