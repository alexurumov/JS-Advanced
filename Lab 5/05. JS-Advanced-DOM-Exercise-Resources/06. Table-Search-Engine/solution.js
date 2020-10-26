function solve() {
   let input = document.getElementById('searchField');
   let button = document.getElementById('searchBtn');
   let tbody = document.getElementsByTagName('tbody')[0];
   let trs = tbody.getElementsByTagName('tr');

   // let temp = [];
   // Array.from(trs)
   //    .forEach(tr => {
   //          temp = [...temp, Array.from(tr.getElementsByTagName('td')).map(el => el.innerHTML)];
   //    });
   // const tds = temp.flat();

   button.addEventListener('click', (e) => {
      
      let selected = document.getElementsByClassName('select');
      Array.from(selected).forEach(selected => selected.removeAttribute('class'));
      
      Array.from(trs).forEach(tr => {
         let tds = Array.from(tr.getElementsByTagName('td')).map(td => td.innerHTML);
         let found = false;
         tds.forEach(td => {
            if (td.includes(input)) {
               found = true;
            }
         })
         if (found) {
            tr.setAttribute('class', 'select');
         }
      })
   })
}