const btn = document.getElementById("pasta");
const projeto1 = document.querySelector("#projeto1");
const projeto2 = document.querySelector("#projeto2");
const projeto3 = document.querySelector("#projeto3");
const projeto4 = document.querySelector("#projeto4");
const hoverPerfil = document.querySelector(".area-hover-pefil");
const hoverInfo = document.querySelector(".area-hover-info");
const projetos = document.querySelectorAll(".imgs-conteudo")


hoverPerfil.addEventListener("mouseover", ()=>{ hoverInfo.style = "display: flex;"});
 
hoverPerfil.addEventListener("mouseout", ()=>{ hoverInfo.style = "display: none;"});
