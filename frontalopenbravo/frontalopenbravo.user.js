// ==UserScript==
// @name           FrontalOpenbravo
// @namespace      erp
// @description    Sustituye algunos elementos de la pantalla de login
// @include        http://erp:8880/obiso/security/Login_FS.html
// @include        http://erp:8880/obiso/security/Login_F1.html?Command=LOGIN
// @include        http://erp:8880/obiso/security/Login_F1.html
// ==/UserScript==

function xpath(query) {
    return document.evaluate(query, document, null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}

// Eliminar el cuadrito del SIC, que no me gusta
var logo_support;
logo_support = xpath("/html/body/form/table/tbody/tr/td/div[3]/table/tbody/tr[4]");
logo_support.snapshotItem(0).parentNode.removeChild(logo_support.snapshotItem(0));

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

var avatar = "http://s3.amazonaws.com/twitter_production/profile_images/51575322/chemoso-2_bigger.jpg"

addGlobalStyle('.Login_userPicture { background: transparent url(' + avatar +') no-repeat scroll 0 0; height:128px; margin-top:0px; position:relative; vertical-align:middle; width:128px;}');
