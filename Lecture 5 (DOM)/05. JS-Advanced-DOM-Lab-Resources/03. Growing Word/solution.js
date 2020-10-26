function growingWord() {

  let p = document.querySelector('#exercise p');
  
  if (p.style['color']) {
    switch (p.style['color']) {
      case 'blue': p.style['color'] = 'green'; break;
      case 'green': p.style['color'] = 'red'; break;
      case 'red': p.style['color'] = 'blue'; break;
    }
    size = Number(p.style['font-size'].substring(0, 1));

    p.style['font-size'] = `${size *= 2}px`;

  } else {
    p.style['color'] = 'blue';
    p.style['font-size'] = '2px';
  }
  
  console.log(p.style['color'], p.style['font-size']);
}