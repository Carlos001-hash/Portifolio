const btn = document.getElementById("pasta");
const projeto1 = document.querySelector("#projeto1");
const projeto2 = document.querySelector("#projeto2");
const projeto3 = document.querySelector("#projeto3");
const projeto4 = document.querySelector("#projeto4");
const hoverPerfil = document.querySelector(".area-hover-pefil");
const hoverInfo = document.querySelector(".area-hover-info");
const projetos = document.querySelectorAll(".imgs-conteudo")

projeto1.addEventListener("mouseover", ()=>{ projeto1.style = "width: 285px; height: 285px; box-shadow: 6px 6px;"})
projeto1.addEventListener("mouseout", ()=>{ projeto1.style = "width: 280px; height: 280px; box-shadow: 0px;"})

projeto2.addEventListener("mouseover", ()=>{ projeto2.style = "width: 285px; height: 285px; box-shadow: 6px 6px;"})
projeto2.addEventListener("mouseout", ()=>{ projeto2.style = "width: 280px; height: 280px; box-shadow: 0px;"})

projeto3.addEventListener("mouseover", ()=>{ projeto3.style = "width: 285px; height: 285px; box-shadow: 6px 6px;"})
projeto3.addEventListener("mouseout", ()=>{ projeto3.style = "width: 280px; height: 280px; box-shadow: 0px;"})

projeto4.addEventListener("mouseover", ()=>{ projeto4.style = "width: 285px; height: 285px; box-shadow: 6px 6px;"})
projeto4.addEventListener("mouseout", ()=>{ projeto4.style = "width: 280px; height: 280px; box-shadow: 0px;"})

hoverPerfil.addEventListener("mouseover", ()=>{ hoverInfo.style = "display: flex;"})
 
hoverPerfil.addEventListener("mouseout", ()=>{ hoverInfo.style = "display: none;"}) 