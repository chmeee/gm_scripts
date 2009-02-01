// ==UserScript==
// @name           sexycurl
// @namespace      erp
// @include        http://erp:8880/obiso/utility/Home.html
// @include        http://erp:8880/obiso/security/Login_F1.html?Command=LOGIN
// @include	   http://erp:8880/obiso/ad_process/HoursEmployee.html
// @include	   http://erp:8880/obiso/ad_process/HoursEmployee_Charge.html
// ==/UserScript==

function bodyInsert(element) {
        document.body.insertBefore(element, document.body.lastChild);
}

function headInsert(element) {
        document.getElementsByTagName('head')[0].appendChild(element);
}

var jq_script, jqui_script, turn_script, turn_css, script, picture;

picture = document.createElement('img');
picture.id = "target";
picture.src = "http://www.edpadgett.com/blog/uploaded_images/dilbert2-736418.jpg";
// picture.src = "http://horsesthink.com/wp-content/uploads/2008/02/network_beale.jpg";
picture.style.display = 'none';

bodyInsert(picture);

jq_script = document.createElement('script');
jq_script.src = "http://chmeee.github.com/javascript/jquery1.3min.js";

jqui_script = document.createElement('script');
jqui_script.src = "http://chmeee.github.com/javascript/jqueryui.js";

turn_script = document.createElement('script');
turn_script.src = "http://chmeee.github.com/javascript/turn.js";

turn_css = document.createElement('link');
turn_css.rel = "stylesheet";
turn_css.href = "http://chmeee.github.com/styles/turn.css";

script = document.createElement('script');
script.type = "text/javascript";
script.innerHTML =      '$(document).ready(function(){\n' +
                        '$("#target").fold();\n' +
                        '});';

headInsert(jq_script);
headInsert(jqui_script);
headInsert(turn_css);
headInsert(turn_script);
bodyInsert(script);

picture.style.display = '';

