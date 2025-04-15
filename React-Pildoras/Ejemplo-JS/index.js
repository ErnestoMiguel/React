function agregaImagen(){
    let url=document.getElementById("urlImagen").value;
    let pie=document.getElementById("pieDeFoto").value;

    if(url && pie){
        let contenedor=document.getElementById("contenedor-imagenes");

        //creamos el contenedor para las imaganes 
        let figure = document.createElement("figure");

        //creamos la nueva imagene
        let img = document.createElement("img");
        img.src=url;
        img.className="imagen-mia";

        //creamos el nuevo pie de foto
        let pieFoto = document.createElement("figcaption");
        pieFoto.textContent=pie;
        pieFoto.className="fig";

        //
        figure.appendChild(img);
        figure.appendChild(pieFoto);
        contenedor.appendChild(figure);
    }else alert("Introduce una URL o pie Validos");
}