// Parse the URL
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&amp;]" + name + "=([^&amp;#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// Give the URL parameters variable names
var source = getParameterByName('ref');




// Set the cookies
if($.cookie('ref') == null || $.cookie('ref') == "") {
$.cookie('ref', source);
}



$(document).ready(function(){
 $('input[name=ref').val(ref);

});
