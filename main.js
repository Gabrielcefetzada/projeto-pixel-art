let container = document.querySelector('#container');
function clonaOsQuadradinnhos1(){

	let i;

	for(i = 0; i < 45; i++){
		var caixaClonada = document.createElement('DIV');
		var caixaClonada2 = document.createElement('DIV');
		container.appendChild(caixaClonada);
		container.appendChild(caixaClonada2);
		caixaClonada.classList.add('caixaPixelizada');
		caixaClonada2.classList.add('caixaPixelizadaPreta');
	}

}

function clonaOsQuadradinnhos2(){

	let i;

	for(i = 0; i < 45; i++){
		var caixaClonada = document.createElement('DIV');
		var caixaClonada2 = document.createElement('DIV');
		container.appendChild(caixaClonada2);
		container.appendChild(caixaClonada);
		caixaClonada.classList.add('caixaPixelizada');
		caixaClonada2.classList.add('caixaPixelizadaPreta');
	}

}

for(i = 0; i < 22; i++){
	clonaOsQuadradinnhos1();
	clonaOsQuadradinnhos2();
}

let pixel = document.querySelector('.caixaPixelizada');

pixel.addEventListener("mousedown", function(e){
	e.target.style.backgroundColor = 'black';
})
