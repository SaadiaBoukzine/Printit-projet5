const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const flecheDroite = document.querySelector(".arrow_right");
const flecheGauche = document.querySelector(".arrow_left");
const points = document.querySelector(".dots");
const imgbanniere = document.querySelector(".banner-img");
const tagLineslide = document.querySelector("p");

let compteur =0;
imgbanniere.src = './assets/images/slideshow/'+slides[compteur].image;


for(let i =0; i< slides.length;i++){
	let selecpoint = document.createElement('div');
	if(compteur == i){
		selecpoint.classList.add("dot_selected");
	}
	selecpoint.classList.add("dot");
	points.appendChild(selecpoint);
}

let comptpoints = document.querySelector(".dot");

flecheDroite.addEventListener("click", ()=>{
	if (compteur != slides.length-1){
		compteur++;
	}else{
			compteur =0;
	}
		imgbanniere.src ='./assets/images/slideshow/'+slides[compteur].image;
		tagLineslide.innerHTML = slides[compteur].tagLine;		
		carousel(comptpoints);
	console.log("ok");
});

flecheGauche.addEventListener("click", ()=> {
	if(compteur == 0){
		compteur = slides.length;
	}else{
			compteur --;
	}
	imgbanniere.src ='./assets/images/slideshow/'+slides[compteur].image;
	tagLineslide.innerHTML=slides[compteur].tagLine;
	carousel(comptpoints);
	console.log("ok");
});


const carousel = (comptpoints) =>{
	for(let i =0; i< comptpoints.length;i++){
		comptpoints[i].classList.remove("dot_selected");	
	if(cpt == i){
		comptpoints[i].classList.add("dot_selected");
	}
	comptpoints[i].classList.add("dot");
	points.appendChild(comptpoints[i]);
}
}