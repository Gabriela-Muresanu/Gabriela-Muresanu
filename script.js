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
buton.addEventListener("click", Pagina_2);
an.addEventListener("mouseover", displayAge);

function Pagina_2()
{
	nume.innerHTML = "Functie: Senior Java Dev";
	prenume.innerHTML = "Locul muncii: Bali";
	asteptari.innerHTML = "Experiente: sarit cu parasuta, patinaj, karting";

	img.src = "peisaj.jpg";
	body.style.backgroundColor = "#6495ED";
	img.style.opacity = "0.7";
	

}


function displayAge()
{
	an.innerHTML = year - an.innerHTML;
}