function score(input) {

    function escape_html(str) {
        if ((str===null) || (str===''))
              return false;
        else
          str = str.toString();
         
        var map = {
           '&': '&amp;',
           '<': '&lt;',
           '>': '&gt;',
           '"': '&quot;',
           "'": '&#39;'
        };
       
        return str.replace(/[&<>"']/g, function(m) { return map[m]; });
    };

    const objects =  JSON.parse(input);

    let html = '<table>\n';
    
    html += '<tr>'
    for (const key in objects[0]) {
        html += `<th>${escape_html(key)}</th>`
    }
    html += '</tr>\n';

    objects.forEach(object => {
        html += '<tr>';
        for (const key in object) {
            html += `<td>${escape_html(object[key])}</td>`;
    }
        html += '</tr>\n';
    });

    html += '</table>';

    console.log(html);

}

score( ['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']   );