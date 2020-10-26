// function JSONTable(input) {

    // function escape_html(str) {
    //     if ((str===null) || (str===''))
    //           return false;
    //     else
    //       str = str.toString();
         
    //     var map = {
    //        '&': '&amp;',
    //        '<': '&lt;',
    //        '>': '&gt;',
    //        '"': '&quot;',
    //        "'": '&#39;'
    //     };
       
    //     return str.replace(/[&<>"']/g, function(m) { return map[m]; });
    // };
//     let html = '<table>\n';
//     input.forEach(line => {
//         const person = JSON.parse(line);
//         html += '<tr>\n';
//         for (const key in person) {
//             html += `<td>${escape_html(person[key])}</td>\n`;    
//         }
//         html += '</tr>\n';

//     });
//     html += '</table>';
//     console.log(html);
// }

function JSONTable(input) {

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
    
    let parsedData = input.map(x => JSON.parse(x));
    let createTable = content => `<table>\n${content}</table>\n`;
    let createRow = content => `<tr>\n${content}</tr>\n`;
    let createTableData = content => `<td>${content}</td>\n`;

    let trs = parsedData.reduce((acc, row) => {
        let tds = Object.values(row).reduce((tdAcc, td) => {
            return tdAcc + createTableData(escape_html(td));
        }, '')
        return acc + createRow(tds);
    }, '')

    return createTable(trs);
}

console.log(JSONTable( ['{"name":"Pesho","position":"Promenliva","salary":100000}', 

'{"name":"Teo","position":"Lecturer","salary":1000}', 

'{"name":"Georgi","position":"Lecturer","salary":1000}']    ));