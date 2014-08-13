function muestra() {
  var elemento = document.getElementById("adicional");
  elemento.className = "visible";
 
  var enlace = document.getElementById("enlace");
  enlace.className = "oculto";
}
	
function popUp(URL) {
	day = new Date();
id = day.getTime();	
		eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=755,height=610');");
}


window.onload=function(){
	
	var btnValidar=document.getElementById("enviar");
	btnValidar.onclick=function(){
		var nombres= document.frm.nombre.value;
		var telefono= document.frm.tel.value;
		var email= document.frm.email.value;
		var producto= document.frm.produc.value;
		var mensaje= document.frm.mensaje.value;
		var patron=/[a-z]+/i;
		if(!patron.test(nombres))
			alert('El nombre introducido no es correcto');
		var patron=/\d\d?/;
		if (!patron.test(telefono))
			alert('la tel introducida no es correcta');
		var patron=/[\w-\.]{3,}	@([\w-] {2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;                                  
		if (!patron.test(email))
			alert('el email introducido no es correcto');
		}
		
	}



function buscar(){
	var opcion= new Array();
	opcion.push(prompt("¿Que desea buscar?"))
	
	switch(opcion){
		 case "ps3":
		 case "PS3":
		 window.location = "ps3.html"
		 break;
		 case "nintendo":
		 case "NINTENDO":
		 window.location = "nintendo.html"
		 break;
		 case "XBOX":
		 case "xbox":
		 window.location = "xbox.html"
		 break;
		 default:
		 alert("No se encontraron coincidencias");
		 break;
	}
}
