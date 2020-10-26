function solve() {

  const arr = Array.from(document.getElementsByClassName('link-1'));
  arr.forEach(div => {
    let a = div.getElementsByTagName('a')[0];
    let p = div.getElementsByTagName('p')[0];
    a.onclick = function doSth() {
      const textArr = p.innerHTML.split(' ');
      textArr[1]++;
      p.innerHTML = textArr.join(' ');
    }
})

}