
function getInputValue(){
	var mensaje= document.getElementById("chattexto");
	return mensaje.value;
}
function AccionToDo(texto){
	var respuesta= document.getElementById("respuesta");
	var caja= document.createElement("div");
	var elemento= document.createElement("span")
	elemento.className="text";
	elemento.innerHTML= texto;
	var boton= document.createElement("button");
	boton.className="eliminar";
	var icon= document.createElement("i");
	icon.className="glyphicon glyphicon-trash"
	boton.onclick= function(){
		respuesta.removeChild(caja);
	}
	var check= document.createElement("input");
	check.type="checkbox";
	check.onchange= function(){
		if(check.checked==true){
			elemento.innerHTML=texto.strike();
		}
		else{
			elemento.innerHTML=texto;
		}
	}
	boton.appendChild(icon);
	caja.appendChild(check);
	caja.appendChild(elemento);
	caja.appendChild(boton);
	respuesta.appendChild(caja);
}
function limpiarCaja() {
    var mensaje = document.getElementById("chattexto");
    mensaje.value = "";
    mensaje.focus();
}
function Funcion(){
    var mensaje= getInputValue();
    if(mensaje!==""){
        AccionToDo(mensaje);
        limpiarCaja();
    }
}