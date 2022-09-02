$(document).ready(function () {

	$(".btn-comprar").click(function(){
		alert("Este produto não está disponível");
	});
});

function abreFechaMenu () {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("mostraEscondeMenu");
  }