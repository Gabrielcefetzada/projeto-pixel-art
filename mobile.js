
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

// js lapis mobile

function DesenhaLapisMobile(){
	let pixelsMob = document.querySelectorAll(".pixel");
	let containerMob = document.querySelector("#container-mobile");
	let pressedMob = false;
	let i;

		containerMob.addEventListener("mousedown", function(){
			pressedMob = true;
		})

		containerMob.addEventListener("mouseup", function(){
			pressedMob = false;
		})

		for(i = 0; i < pixelsMob.length; i++){
			pixelsMob[i].addEventListener("mouseover", function(){
				if(pressedMob){
					this.style.backgroundColor =  document.getElementById('colorp').value;
				}
			});
		}
	}

	// borracha mobile 

function ApagaMobile(){
	let borrachaMob = document.querySelectorAll(".caixaPixelizadaMobile");
	let borrachaMob2 = document.querySelectorAll(".caixaPixelizadaPretaMobile");
	let i;

	for(i = 0; i < borrachaMob.length; i++){
		borrachaMob[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = 'white';
		});
	}

	for(i = 0; i < borrachaMob2.length; i++){
		borrachaMob2[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = 'rgba(194, 196, 190, 0.9)';
		});
	}
}