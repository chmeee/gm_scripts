// ==UserScript==
// @name           Openbravo - hoja de horas
// @namespace      openbravo
// @description    Elimina proyectos que no quieres ver
// @include        http://erp/openbravo/ad_process/HoursEmployee.html
// @include        http://erp/openbravo/ad_process/HoursEmployee_Charge.html
// @include        http://erp:8880/obiso/ad_process/HoursEmployee.html
// @include        http://erp:8880/obiso/ad_process/HoursEmployee_Charge.html
// ==/UserScript==
function xpath(query) {
    return document.evaluate(query, document, null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}

// Introduce en el array los proyectos (o keywords) que no quieres que aparezcan en la hoja de horas
var malosProyectos = new Array(
	"Proyecto malo 1",
	"Proyecto malo 2",
	"...",
	"Proyecto malo n");

var all_td_negrita, this_td;

all_td_negrita = xpath("//td[@class='Negrita']");

for (var i = 0; i < all_td_negrita.snapshotLength; i++) {
        this_td = all_td_negrita.snapshotItem(i);
        var text = this_td.childNodes[0].textContent;

        for (var j =0; j < malosProyectos.length; j++) {
                if(text.match(malosProyectos[j])) {
//                        this_td.parentNode.parentNode.removeChild(this_td.parentNode);
			this_td.parentNode.style.display="none";
                } else {
                        // Elimina la etapa de la primera columna para reducir información inservible
                        // e incluye un subrayado para hacer que la primera columna ocupe una única línea
                        this_td.childNodes[0].textContent = text.replace(/(.*) - .*/, "$1").replace(/ /g, "_");
                }
        }
}
