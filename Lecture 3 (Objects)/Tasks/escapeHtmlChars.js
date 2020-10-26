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