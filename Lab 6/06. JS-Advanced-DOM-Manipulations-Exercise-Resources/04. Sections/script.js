function create(words) {
   const $div = document.getElementById('content');

   words.forEach(word => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', function() {
         div.children[0].style.display = 'block';
      })
      $div.appendChild(div);
   });
}