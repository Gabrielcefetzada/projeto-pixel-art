
// js para que as caixas pidelizadas apareçam (desktop)

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
 
// fazer o quadrado pixelizado no overiew


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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// lapis 

function DesenhaLapis(){
	let pixels = document.querySelectorAll(".pixel");
	let container = document.querySelector("#container");
	let pressed = false;
	let i;

		container.addEventListener("mousedown", function(){
			pressed = true;
		})

		container.addEventListener("mouseup", function(){
			pressed = false;
		})

		for(i = 0; i < pixels.length; i++){
			pixels[i].addEventListener("mouseover", function(){
				if(pressed == true){
					this.style.backgroundColor =  document.getElementById('colorp').value;
				} 
			});
		}
	}

// borracha 

function Apaga(){
	let borracha = document.querySelectorAll(".caixaPixelizada");
	let borracha2 = document.querySelectorAll(".caixaPixelizadaPreta");
	let i;
	let pressed = false;

		container.addEventListener("mousedown", function(){
			pressed = true;
		})

		container.addEventListener("mouseup", function(){
			pressed = false;
		})

	for(i = 0; i < borracha.length; i++){
			borracha[i].addEventListener("mouseover", function(){
				if (pressed) 
				this.style.backgroundColor = 'white';
			});
		}

	for(i = 0; i < borracha2.length; i++){
			borracha2[i].addEventListener("mouseover", function(){
			if (pressed)
			this.style.backgroundColor = 'rgba(194, 196, 190, 0.9)';
			});
		}
	}

//Function to convert hex format to a rgb color

function rgb2hex(rgb){
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	return (rgb && rgb.length === 4) ? "#" +
	 ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	 ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	 ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

// colorpicker

function pickColor() {
	let pegarCor = document.querySelectorAll(".pixel");
	let i;
	let valor;
	let cor = document.querySelector("#colorp");

	for(i = 0; i < pegarCor.length; i++){
		pegarCor[i].addEventListener("click", function(e){
			valor = e.target.style.backgroundColor;
			console.log(valor);
			cor.value = rgb2hex(valor);	
			console.log(cor.value);
		});
	}
}

// pincel maior 

function pincelMaior(){
var container = document.querySelector('#container');
let i;
let index;
let pixels = document.querySelectorAll(".pixel");
let pressed = false;

		container.addEventListener("mousedown", function(){
			pressed = true;
		})

		container.addEventListener("mouseup", function(){
			pressed = false;
		})

	for(i = 0; i < pixels.length; i++){
			pixels[i].addEventListener("mouseover", function(){
				if (pressed) 
					index = (Array.from(container.children).indexOf(this));
						pixels[index].style.backgroundColor = document.getElementById('colorp').value;
						pixels[index+1].style.backgroundColor = document.getElementById('colorp').value;
						pixels[index-1].style.backgroundColor = document.getElementById('colorp').value;
						pixels[index+90].style.backgroundColor = document.getElementById('colorp').value;
						pixels[index-90].style.backgroundColor = document.getElementById('colorp').value;		
			}); 
		}
	}

// js para a modal e para escurecer o fundo ao abri-la

let modal = document.getElementById('sobre-a-gente');
let escuro = document.getElementById("gradient");
+1
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

// espaço para guardar trechos de código que poderão ser usados futuramente


// alert(Array.from(container.children).indexOf(this));

	// lapis overview
	// let pixel2 = document.querySelectorAll(".pixel2")
	// Array.from(pixel2);
	// pixel2[index].style.backgroundColor = document.getElementById('colorp').value;