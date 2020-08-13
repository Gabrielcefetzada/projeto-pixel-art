<<<<<<< HEAD
// js para que as caixas pixelizadas apareçam (desktop)
=======
//caixas pixelizadas
>>>>>>> 761476e127f48b97f9a79d37efd5fffd4efe9c5a

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
		caixaClonada.classList.add('pixel');
		caixaClonada2.classList.add('pixel');
		caixaClonada.draggable = false;
		caixaClonada2.draggable = false;
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
		caixaClonada.classList.add('pixel');
		caixaClonada2.classList.add('pixel');
		caixaClonada.draggable = false;
		caixaClonada2.draggable = false;
	}

}

for(i = 0; i < 22; i++){
	clonaOsQuadradinnhos1();
	clonaOsQuadradinnhos2();
}

<<<<<<< HEAD
// js para que as caixas pixelizadas apareçam (mobile)

let containerMobile = document.querySelector('#container-mobile');

function clonaOsQuadradinnhosMobile1(){

	let i;

	for(i = 0; i < 16; i++){
		var caixaClonadaMobile = document.createElement('DIV');
		var caixaClonadaMobile2 = document.createElement('DIV');
		containerMobile.appendChild(caixaClonadaMobile);
		containerMobile.appendChild(caixaClonadaMobile2);
		caixaClonadaMobile.classList.add('caixaPixelizadaMobile');
		caixaClonadaMobile2.classList.add('caixaPixelizadaPretaMobile');
		caixaClonadaMobile.classList.add('pixel');
		caixaClonadaMobile2.classList.add('pixel');
		caixaClonadaMobile.draggable = false;
		caixaClonadaMobile2.draggable = false;
	}

}

function clonaOsQuadradinnhosMobile2(){

	let i;

	for(i = 0; i < 16; i++){
		var caixaClonadaMobile = document.createElement('DIV');
		var caixaClonadaMobile2 = document.createElement('DIV');
		containerMobile.appendChild(caixaClonadaMobile2);
		containerMobile.appendChild(caixaClonadaMobile);
		caixaClonadaMobile.classList.add('caixaPixelizadaMobile');
		caixaClonadaMobile2.classList.add('caixaPixelizadaPretaMobile');
		caixaClonadaMobile.classList.add('pixel');
		caixaClonadaMobile2.classList.add('pixel');
		caixaClonadaMobile.draggable = false;
		caixaClonadaMobile2.draggable = false;
	}

}

for(i = 0; i < 10; i++){
	clonaOsQuadradinnhosMobile1();
	clonaOsQuadradinnhosMobile2();
}

// js lapis by gabriel 
=======
//fazer o quadrado pixelizado no overiew
>>>>>>> 761476e127f48b97f9a79d37efd5fffd4efe9c5a

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
		caixaClonada.classList.add('pixel2');
		caixaClonada2.classList.add('pixel2');
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
		caixaClonada.classList.add('pixel2');
		caixaClonada2.classList.add('pixel2');
	}

}

for(i = 0; i < 14; i++){
	clonaOsQuadradinnhos3();
	clonaOsQuadradinnhos4();
}

//lapis 
let index;

function DesenhaLapis(){
	let pixels = document.querySelectorAll(".pixel");
	let container = document.querySelector("#container");
	let pressed = false;
	let i;
	let j;

	container.addEventListener("mousedown", function(){
		pressed = true;
	})

	container.addEventListener("mouseup", function(){
		pressed = false;
	})

	for(i = 0; i < pixels.length; i++){
		pixels[i].addEventListener("mouseover", function(){
			if(pressed){
				this.style.backgroundColor =  document.getElementById('colorp').value;
				index = Array.from(container.children).indexOf(this);
				//alert(index);
			}
		});
	}

	//lapis overview
	let pixel2 = document.querySelectorAll(".pixel2")
	Array.from(pixel2);
	pixel2[index].style.backgroundColor = document.getElementById('colorp').value;
}


//borracha 

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



