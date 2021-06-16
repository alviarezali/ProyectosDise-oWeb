document.addEventListener("DOMContentLoaded", function(e){
	
	const menuLink= document.querySelectorAll('.menu-2 a');
	const acercaDe =  document.getElementById('acerca-de').offsetTop;
	const trabajos =  document.getElementById('trabajos').offsetTop;
	const contacto =  document.getElementById('contacto').offsetTop;
	const boton= document.getElementById("boton-menu");
	const caja = document.getElementById("nav");

	if (screen.width>800) {
		menuLink.forEach(function(element, index){
			element.style.top="-200px";

			element.animate([
				{top:'0'}
			], {
				duration: (2000+(index*500)),
				fill: "forwards"
			});
		});
	};
		// name.setAttribute("style","display:block;");
		for (var i = menuLink.length - 1; i >= 0; i--) {
			menuLink[i].addEventListener('click',scroll);
		}

		function scroll(e){
			e.preventDefault();
			document.querySelector("html").scroll({
				top: ((this == menuLink[0])?acercaDe:0) ||((this == menuLink[1])?trabajos:0) ||((this == menuLink[2])?contacto:0),
				behavior: 'smooth'
			});
		};


		// -------------------MENU--------------------------
		boton.addEventListener('click', function(e){
			e.preventDefault();

			if (caja.clientHeight ==0) {
				caja.animate([
		 			{height: '230px'}
				],{
					duration: 1000,
					easing : "ease",
					fill: "forwards"	
				})
			}else if(caja.clientHeight ==230 ){
				caja.animate([
					{height: '0px'}
				],{
					duration: 1000,
					easing : "ease",
					fill: "forwards"	
				})
			};
		})
	
	document.addEventListener("mouseup", function(e){
		if (!caja.contains(e.target) && caja.clientHeight == 230 ) {
			caja.animate([
 				{height: '0px'}
		],{
			duration: 1000,
			easing : "ease",
			fill: "forwards"	
		});
		}
	})
	
});

