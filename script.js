//Cache the DOM
var buton = document.getElementById("button");
var nume = document.getElementById("nume");
var body = document.getElementById("body");
var prenume = document.getElementById("prenume");
var img = document.getElementById("imagine");
var asteptari = document.getElementById("asteptari");
var an = document.getElementById("anNastere");


const date = new Date(); 
var year = date.getFullYear();



// Add eventListener
buton.addEventListener("click", altaViata);
an.addEventListener("mouseover", displayAge);

function altaViata()
{
	nume.innerHTML = "Functie: Senior Java Dev";
	prenume.innerHTML = "Locul muncii: Bali";
	asteptari.innerHTML = "Experiente: sarit cu parasuta, patinaj, karting";

	img.src = "baki.jpg";
	body.style.backgroundColor = "red";
	img.style.opacity = "0.7";
	

}


function displayAge()
{
	an.innerHTML = year - an.innerHTML;
}