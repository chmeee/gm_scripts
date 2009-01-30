// ==UjerScript==
// @name           MenuVerticalOpenbravo
// @namespace      erp
// @include        http://erp:8880/obiso/utility/VerticalMenu.html
// ==/UserScript==

function xpath(query) {
    return document.evaluate(query, document, null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// Eliminar el bicho sin ojos
var avatar = "http://www.fasticon.com/freeware/delicious_32x32.png";

addGlobalStyle('.Menu_ToolBar_Button_Icon_user { background: transparent url('+ avatar +') no-repeat scroll center center;}');

// unsafeWindow.submitCommandForm('ALL', false, null, 'VerticalMenu.html', '_self');

// Abrir los menus al inicio
var menu_items;

menu_items = xpath('//*[@id="parent160"]|//*[@id="parent800250"]|//*[@id="parent800079"]');

for (var i = 0; i < menu_items.snapshotLength; i++) {
	menu_items.snapshotItem(i).style.display = '';
}
