function descPapaNoel() {
    var d=document.getElementById("d1");
    d.textContent="Trae regalos en Navidad a los niños que se portaron bien. • Solo trabaja una noche al año, pero pasa los otros 364 días peleando con sus elfos por el control del aire acondicionado del Polo Norte. Es intolerante a la lactosa, pero se toma la leche que le dejan por puro compromiso.";
    console.log("Papa Noel");
}
function descReyes() {
    var d=document.getElementById("d2");
    d.textContent="Melchor, Gaspar y Baltasar visitaron al Nino Jesus y dejan regalos cada 6 de enero. • Todavía discuten por quién puso más dinero para el oro. Baltasar insiste en que su camello es el único que sabe leer el mapa, pero Melchor y Gaspar juran que solo seguían la luz más brillante porque olvidaron sus lentes en Oriente.";
    console.log("Reyes Magos");
}
function descGrinch() {
    var d=document.getElementById("d3");
    d.textContent="Al principio odia la Navidad y roba regalos, pero luego cambia y aprende a quererla. Dice que odia los villancicos, pero en secreto tiene una lista de reproducción con éxitos navideños para ducharse. Su perro Max es el único que sabe que la verdadera razón de su mal humor es que su suéter verde pica muchísimo.";
    console.log("Grinch");
}
function descRenos() {
    var d=document.getElementById("d4");
    d.textContent="Rodolfo (Rudolph), Cometa (Comet), Cupido (Cupid), Doncel (Donner), Relampago (Blitzen), Brincador (Dasher), Bailarin (Dancer) y Bromista (Prancer). Tiran del trineo mágico por todo el mundo para repartir los regalos en Nochebuena.";
    console.log("Renos");
}
function descSenoraClaus() {
    var d=document.getElementById("d5");
    d.textContent="Esposa de Papa Noel, ayuda a preparar las galletas y a organizar el taller.";
    console.log("Senora Claus");
}
function descBebeJesus() {
    var d=document.getElementById("d6");
    d.textContent="Figura central del pesebre navideño, cuyo nacimiento en Belen se celebra en Navidad.";
    console.log("Bebe Jesus");
}
function agregarRegalo() {
    var r=document.getElementById("regaloInput").value;
    if (r=="") {
        alert("Escribe un regalo");
    } else {
        var lista=document.getElementById("listaRegalos");
        lista.textContent=lista.textContent+" - "+ r;
        document.getElementById("regaloInput").value="";
        console.log(r);
    }
}
var total=0;
function comprarPicana() {
    var precio=parseInt("35");
    var actual=parseInt(document.getElementById("totalCarrito").textContent);
    total=actual+precio;
    document.getElementById("totalCarrito").textContent=total;
    document.getElementById("carrito").textContent=document.getElementById("carrito").textContent +" | Picana (35)";
    console.log(total);
}
function comprarLechon() {
    var precio=parseInt("40");
    var actual=parseInt(document.getElementById("totalCarrito").textContent);
    total=actual+precio;
    document.getElementById("totalCarrito").textContent=total;
    document.getElementById("carrito").textContent=document.getElementById("carrito").textContent +" | Lechon (40)";
    console.log(total);
}
function comprarPaneton() {
    var precio=parseInt("12");
    var actual=parseInt(document.getElementById("totalCarrito").textContent);
    total=actual+precio;
    document.getElementById("totalCarrito").textContent=total;
    document.getElementById("carrito").textContent=document.getElementById("carrito").textContent +" | Paneton (12)";
    console.log(total);
}