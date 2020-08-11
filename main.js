// js para que as caixas pixelizadas apareçam

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

//js lapis temporariamente inutilizável

/* let pixel = document.querySelector('.caixaPixelizada');

for(i = 0; i < pixel.length; i++){
	if(pixel.tagName == 'DIV' || pixel.tagName == 'div'){
		if(pixel[i].addEventListener){
			pixel[i].addEventListener('mousedown', function(e){
				e = e;
    			let target = e.target || e.srcElement;
				target.style.backgroundColor = 'black';
			})
		}
	}
}

let pixel2 = document.querySelector('.caixaPixelizadaPreta');

pixel2.addEventListener("mousedown", function(e){
	e.target.style.backgroundColor = 'black';
})

*/

// js lapis by gabriel 

function DesenhaLapis(){


	let espacos = document.querySelectorAll(".caixaPixelizada");
	let espacos2 = document.querySelectorAll(".caixaPixelizadaPreta");
	let i;

		for(i = 0; i < espacos.length; i++){
			espacos[i].addEventListener("mouseover", function(){
				this.style.backgroundColor =  document.getElementById('colorp').value;
			});
		}

		for(i = 0; i < espacos2.length; i++){
			espacos2[i].addEventListener("mouseover", function(){
				this.style.backgroundColor =  document.getElementById('colorp').value;
			});
		}
	}

// js borracha by gustavo

function Apaga(){

	let borracha = document.querySelectorAll(".caixaPixelizada");
	let borracha2 = document.querySelectorAll(".caixaPixelizadaPreta");
	let i;

		for(i = 0; i < borracha.length; i++){
			borracha[i].addEventListener("mouseover", function(){
				this.style.backgroundColor = 'white';
			});
		}

		for(i = 0; i < borracha2.length; i++){
			borracha2[i].addEventListener("mouseover", function(){
				this.style.backgroundColor = 'rgba(194, 196, 190, 0.9)';
			});
		}
	}

// js para a modal e para escurecer o fundo ao abri-la

let modal = document.getElementById('sobre-a-gente');
let escuro = document.getElementById("gradient");

function AbreModal(){

	if(modal.style.display == 'block'){
		modal.style.display = 'none';
	} else {
		modal.style.display = 'block';	
	}


if(escuro.style.display == 'block'){
		escuro.style.display = 'none';
	} else {
		escuro.style.display = 'block';
	}

}


function FechaModal(){

	modal.style.display = 'none';
	escuro.style.display = 'none';
}

//js pra fazer o quadrado pixelizado no overiew

let container2 = document.querySelector("#overview");
function clonaOsQuadradinnhos3(){

	let i;

	for(i = 0; i < 18; i++){
		let caixaClonada = document.createElement('DIV');
		let caixaClonada2 = document.createElement('DIV');
		container2.appendChild(caixaClonada);
		container2.appendChild(caixaClonada2);
		caixaClonada.classList.add('caixaPixelizada2');
		caixaClonada2.classList.add('caixaPixelizadaPreta2');
	}

}

function clonaOsQuadradinnhos4(){

	let i;

	for(i = 0; i < 18; i++){
		let caixaClonada = document.createElement('DIV');
		let caixaClonada2 = document.createElement('DIV');
		container2.appendChild(caixaClonada2);
		container2.appendChild(caixaClonada);
		caixaClonada.classList.add('caixaPixelizada2');
		caixaClonada2.classList.add('caixaPixelizadaPreta2');
	}

}

for(i = 0; i < 14; i++){
	clonaOsQuadradinnhos3();
	clonaOsQuadradinnhos4();
}

