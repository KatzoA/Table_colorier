function dessiner(){
    const rows = document.querySelector('#rows').value;
    const cols = document.querySelector('#cols').value;
    const ecran = document.querySelector('#ecran')

    ecran.innerHTML = makeTable(rows, cols)
}
var color="black";
function makeTable(r, c){
    var table ="<table border = '1'>";
   // boucle ligne: tr
   for(var i = 0; i<r; i++){
       table += "<tr>";
    // boucle pour les colonnes : td
    for(var j = 0; j<c; j++){
        table += "<td onmouseover='colorer(this, event)'></td>";
    }
       table += "</tr>";
   }
    table += "</table>";
    return table;
}

function colorer(td,e){
    td.style.backgroundColor = color;

}