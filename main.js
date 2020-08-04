
function clonaOsQuadradinnhos(){

	var i = 0;

	for(i = 0; i < 500; i++){
		var caixaClonada = document.createElement('DIV');
		var caixaClonada2 = document.createElement('DIV');
		caixaClonada.classList.add('caixaPixelizada');
		caixaClonada2.classList.add('caixaPixelizadaPreto');
		document.getElementById('container').appendChild(caixaClonada);
		document.getElementById('container').appendChild(caixaClonada2);
	}

}

clonaOsQuadradinnhos();