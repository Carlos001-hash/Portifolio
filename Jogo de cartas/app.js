let buttonStart = document.getElementById("startButton")
let buttonBattle = document.getElementById("attackButton")
let cartaUm = document.getElementById("oneMoreCard1");
let cartaDois = document.getElementById("oneMoreCard2");
let cartaTres = document.getElementById("oneMoreCard3");
let carta2Um = document.getElementById("twoMoreCard1");
let carta2Dois = document.getElementById("twoMoreCard2");
let carta2Tres = document.getElementById("twoMoreCard3")

let labelCartaMT = '<label class="labelCards" id=""><div class="cartasMos">';

let c1, c2, c3, c4, c5, c6;
let ca1, ca2, ca3, ca4, ca5, ca6;
let cnd1 = 0, cnd2 = 0, cnd3 = 0; 
let cnd4 = 0, cnd5 = 0, cnd6 = 0;

let carta0101;
let carta0201;
let carta0301;
let carta0102;
let carta0202;
let carta0302;

let player1Points = 0;
let player2Points = 0;
let g0 = 0;
let cnd = 0;



function placarPontos() {
  btn = document.getElementById("btnZero");
  vencedor = document.getElementById("vencedor")
  ataqueButtom = document.getElementById("attackButton");
  let placar = document.querySelector(".pontos");
  placar.innerHTML = '<div class="placarPontos" id="ponto-jogador2">' + player1Points + '</div>' 
  + '|' + '<div class="placarPontos" id="ponto-jogador1">' + player2Points + '</div>';
  console.log(g0)

  if (g0 == 3) {
    btn.style = "display: block;";
    vencedor.style = "display: block;";
    ataqueButtom.style = "display: none;";

    if (player1Points > player2Points) {
      vencedor.innerHTML = "Jogador 1 Ganhou"
    }else if (player1Points < player2Points) {
      vencedor.innerHTML = "Jogador 2 Ganhou"
    }
  }
}



function novaPrtida() {
  g0 = 0;
  player1Points = 0;
  player2Points = 0;
  placarPontos()
  btn.style = "display: none;";
  location.reload()
}


function myCard1Function() {
  let ataque1 = parseInt(Math.random() * 100);
  let defesa2 = parseInt(Math.random() * 100);
  let magia3 = parseInt(Math.random() * 100);

  let ataque5 = parseInt(Math.random() * 100);
  let defesa6 = parseInt(Math.random() * 100);
  let magia7 = parseInt(Math.random() * 100);
  
  let ataque9 = parseInt(Math.random() * 100);
  let defesa10 = parseInt(Math.random() * 100);
  let magia11 = parseInt(Math.random() * 100);
  
  
  cardPlayer1 = {
    card1: {
      Ataque: ataque1,
      Defesa: defesa2,
      Magia: magia3,
    },
    card2: {
    Ataque: ataque5,
      Defesa: defesa6,
      Magia: magia7,
    },
    card3: {
      Ataque: ataque9,
      Defesa: defesa10,
      Magia: magia11,
    },
  }
  let radioCarta1 = '<input type="radio" name="this1" class="oneCard" id="oneCard1" onclick="moveCards()">';
  let labelCarta1 = '<label class="cards" id="one-card1" for="oneCard1" style="border: none;"><div class="cartas">'

  ca1 = labelCartaMT + '<div class="cartaMostragem">' + `Ataque: ${cardPlayer1.card1["Ataque"]}` + '</div>' + '<br>' + '<div class="cartaMostragem">' + `Defesa: ${cardPlayer1.card1["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer1.card1["Magia"]}` + '</div>' + '</div></label>';
  c1 = radioCarta1 + labelCarta1 + '<div class="textoPoderCarta">' + `Ataque: ${cardPlayer1.card1["Ataque"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Defesa: ${cardPlayer1.card1["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer1.card1["Magia"]}` + '</div>' + '</div></label>';
  
  cartaUm.innerHTML = c1;
  carta0101 = cardPlayer1.card1["Ataque"] + cardPlayer1.card1["Defesa"] + cardPlayer1.card1["Magia"];
  console.log(`1 ${carta0101}`);
  
  let radioCarta2 = '<input type="radio" name="this1" class="oneCard" id="oneCard2" onclick="moveCards()">';
  let labelCarta2 = '<label class="cards" id="one-card2" for="oneCard2"><div class="cartas">'
  
  ca2 = labelCartaMT + '<div class="cartaMostragem">' + `Ataque: ${cardPlayer1.card2["Ataque"]}` + '</div>' + '<br>' + '<div class="cartaMostragem">' + `Defesa: ${cardPlayer1.card2["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer1.card2["Magia"]}` + '</div>' + '</div></label>';
  c2 = radioCarta2 + labelCarta2 + '<div class="textoPoderCarta">' + `Ataque: ${cardPlayer1.card2["Ataque"]}`+ '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Defesa: ${cardPlayer1.card2["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer1.card2["Magia"]}` + '</div>' + '</div></label>';
  
  cartaDois.innerHTML = c2;
  carta0201 = cardPlayer1.card2["Ataque"] + cardPlayer1.card2["Defesa"] / 2 + cardPlayer1.card2["Magia"];
  console.log(`2 ${carta0201}`);
  
    let radioCarta3 = '<input type="radio" name="this1" class="oneCard" id="oneCard3" onclick="moveCards()">';
  let labelCarta3 = '<label class="cards" id="one-card3" for="oneCard3"><div class="cartas">'
  
  ca3 = labelCartaMT + '<div class="cartaMostragem">' + `Ataque: ${cardPlayer1.card3["Ataque"]}` + '</div>' + '<br>' + '<div class="cartaMostragem">' + `Defesa: ${cardPlayer1.card3["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer1.card3["Magia"]}` + '</div>' + '</div></label>';
  c3 = radioCarta3 + labelCarta3 + '<div class="textoPoderCarta">' + `Ataque: ${cardPlayer1.card3["Ataque"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Defesa: ${cardPlayer1.card3["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer1.card3["Magia"]}` + '</div>' + '</div></label>';
  
  cartaTres.innerHTML = c3;
  carta0301 = cardPlayer1.card3["Ataque"] + cardPlayer1.card3["Defesa"] + cardPlayer1.card3["Magia"];
  console.log(`3 ${carta0301}`);
  
 myCard2Function()
 placarPontos()
}

function myCard2Function() {
  
  let ataque13 = parseInt(Math.random() * 100);
  let defesa14 = parseInt(Math.random() * 100);
  let magia15 = parseInt(Math.random() * 100);
  
  let ataque17 = parseInt(Math.random() * 100);
  let defesa18 = parseInt(Math.random() * 100);
  let magia19 = parseInt(Math.random() * 100);
  
  let ataque21 = parseInt(Math.random() * 100);
  let defesa22 = parseInt(Math.random() * 100);
  let magia23 = parseInt(Math.random() * 100);
  
  cardPlayer2 = {
    card1: {
      Ataque: ataque13,
      Defesa: defesa14,
      Magia: magia15,
    },
    card2: {
    Ataque: ataque17,
      Defesa: defesa18,
      Magia: magia19,
  },
    card3: {
      Ataque: ataque21,
      Defesa: defesa22,
      Magia: magia23,
    }
  }

  let radioCarta1 = '<input type="radio" class="oneCard" id="twoCard1" name="this2" value="" onclick="moveCards()">';
  let labelCarta1 = '<label class="cards" id="two-card1" for="twoCard1"><div class="cartas">'
  
  ca4 = labelCartaMT + '<div class="cartaMostragem">' + `Ataque: ${cardPlayer2.card1["Ataque"]}` + '</div>' + '<br>' + '<div class="cartaMostragem">' + `Defesa: ${cardPlayer2.card1["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer2.card1["Magia"]}` + '</div>' + '</div></label>';
  c4 = radioCarta1 + labelCarta1 + '<div class="textoPoderCarta">' + `Ataque: ${cardPlayer2.card1["Ataque"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Defesa: ${cardPlayer2.card1["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer2.card1["Magia"]}` + '</div>' + '</div></label>';
  
  carta2Um.innerHTML = c4;
  carta0102 = cardPlayer2.card1["Ataque"] + cardPlayer2.card1["Defesa"] + cardPlayer2.card1["Magia"];
  console.log(`4 ${carta0102}`);
  
  let radioCarta2 = '<input type="radio" class="oneCard" id="twoCard2" name="this2" value="" onclick="moveCards()">';
  let labelCarta2 = '<label class="cards" id="two-card2" for="twoCard2"><div class="cartas">'
  
  ca5 = labelCartaMT + '<div class="cartaMostragem">' + `Ataque: ${cardPlayer2.card2["Ataque"]}` + '</div>' + '<br>' + '<div class="cartaMostragem">' + `Defesa: ${cardPlayer2.card2["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer2.card2["Magia"]}` + '</div>' + '</div></label>';
  c5 = radioCarta2 + labelCarta2 + '<div class="textoPoderCarta">' + `Ataque: ${cardPlayer2.card2["Ataque"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Defesa: ${cardPlayer2.card2["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer2.card2["Magia"]}` + '</div>' + '</div></label>';
  
  carta2Dois.innerHTML = c5;
  carta0202 = cardPlayer2.card2["Ataque"] + cardPlayer2.card2["Defesa"] + cardPlayer2.card2["Magia"];
  console.log(`5 ${carta0202}`);
  
  let radioCarta3 = '<input type="radio" class="oneCard" id="twoCard3" name="this2" value="" onclick="moveCards()">';
  let labelCarta3 = '<label class="cards" id="two-card3" for="twoCard3"><div class="cartas">'

  ca6 = labelCartaMT + '<div class="cartaMostragem">' + `Ataque: ${cardPlayer2.card3["Ataque"]}` + '</div>' + '<br>' + '<div class="cartaMostragem">' + `Defesa: ${cardPlayer2.card3["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer2.card3["Magia"]}` + '</div>' + '</div></label>';
  c6 = radioCarta3 + labelCarta3 + '<div class="textoPoderCarta">' + `Ataque: ${cardPlayer2.card3["Ataque"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Defesa: ${cardPlayer2.card3["Defesa"]}` + '</div>' + '<br>' + '<div class="textoPoderCarta">' + `Magia: ${cardPlayer2.card3["Magia"]}` + '</div>' + '</div></label>';
  
  carta2Tres.innerHTML = c6;
  carta0302 = cardPlayer2.card3["Ataque"] + cardPlayer2.card3["Defesa"] + cardPlayer2.card3["Magia"];
  console.log(`6 ${carta0302}`);
  
  buttonStart.style = "display: none;";
  buttonBattle.style = "display: block;";
}

function moveCards() {
  let divBattle01 = document.getElementById("battle-cards1");
  let divBattle02 = document.getElementById("battle-cards02");

  let oneCardUm = document.getElementById("one-card1");
  let oneCardDois = document.getElementById("one-card2");
  let oneCardTres = document.getElementById("one-card3");
  let twoCardQuatro = document.getElementById("two-card1");
  let twoCardCinco = document.getElementById("two-card2");
  let twoCardSeis = document.getElementById("two-card3");
  
  let oneCard1 = document.getElementById("oneCard1");
  let oneCard2 = document.getElementById("oneCard2");
  let oneCard3 = document.getElementById("oneCard3");
  let twoCard1 = document.getElementById("twoCard1");
  let twoCard2 = document.getElementById("twoCard2");
  let twoCard3 = document.getElementById("twoCard3");

  
  if (oneCard1.checked == true) {
    divBattle01.innerHTML = ca1;
    buttonBattle.disabled = false;
    oneCardUm.style = "border: 3px solid rgb(255, 129, 0);";
  }
  if (oneCard1.checked == false) {
    oneCardUm.style = "border: none;";
  };

  if (oneCard2.checked == true) {
    divBattle01.innerHTML = ca2;
    buttonBattle.disabled = false;
    oneCardDois.style = "border: 3px solid rgb(255, 129, 0);";
  }else{
    oneCardDois.style = "border: none;";
  };

  if (oneCard3.checked == true) {
    divBattle01.innerHTML = ca3;
    buttonBattle.disabled = false;
    oneCardTres.style = "border: 3px solid rgb(255, 129, 0);";
  }else{
    oneCardTres.style = "border: none;";
  };
  
  if (twoCard1.checked == true) {
   divBattle02.innerHTML = ca4;
   buttonBattle.disabled = false;
   twoCardQuatro.style = "border: 3px solid rgb(255, 129, 0);";
  }else{
    twoCardQuatro.style = "border: none;";
  };

  if (twoCard2.checked == true) {
   divBattle02.innerHTML = ca5;
   buttonBattle.disabled = false;
   twoCardCinco.style = "border: 3px solid rgb(255, 129, 0);";
  }else{
    twoCardCinco.style = "border: none;";
  };

  if (twoCard3.checked == true) {
    divBattle02.innerHTML = ca6;
    buttonBattle.disabled = false;
    twoCardSeis.style = "border: 3px solid rgb(255, 129, 0);";
  }else{
    twoCardSeis.style = "border: none;";
  }
  
}


function play() {
  let carta1Pontos;
  let carta2Pontos;
  
  let oneCard1 = document.getElementById("oneCard1");
  let onecard2 = document.getElementById("oneCard2");
  let oneCard3 = document.getElementById("oneCard3");
  let twoCard1 = document.getElementById("twoCard1");
  let twoCard2 = document.getElementById("twoCard2");
  let twoCard3 = document.getElementById("twoCard3"); 
  
  if (cnd1 == 0) {
    if (oneCard1.checked == true) {
      carta1Pontos = carta0101;
      
      if (carta1Pontos > carta2Pontos) {
        console.log("player 1 gg");
        player1Points++;
        g0++;
        cartaUm.style = "display: none;"
        cnd1++;
      }

      if (carta1Pontos < carta2Pontos) {
        console.log("player 2 gg");
        player2Points++;
        g0++;
        cnd1++;
        cartaUm.style = "display: none;"
      }
      
      cartaUm.style = "display: none;"
      buttonBattle.disabled = true;
    }
    
  }

  if (cnd2 == 0) {
    if (onecard2.checked == true) {
      carta1Pontos = carta0201;
      
      if (carta1Pontos > carta2Pontos) {
        console.log("player 1 gg")
        player1Points++;
        g0++;
        
      }
      if (carta1Pontos < carta2Pontos) {
        console.log("player 2 gg")
        player2Points++;
        g0++;
        
      }
  
      cartaDois.style = "display: none;"
      carta202 = 0;
    }
  }

  if (cnd3 == 0) {
    if (oneCard3.checked == true) {
      carta1Pontos = carta0301;

      if (carta1Pontos > carta2Pontos) {
        console.log("player 1 gg")
        player1Points++;
        g0++;
      }
      if (carta1Pontos < carta2Pontos) {
        console.log("player 2 gg")
        player2Points++;
        g0++;
      }
  
      cartaTres.style = "display: none;"
    }
  }
  
  if (cnd4 == 0) {
    if (twoCard1.checked == true) {
      carta2Pontos = carta0102;
      
      if (carta1Pontos > carta2Pontos) {
        console.log("player 1 gg")
        player1Points++;
        g0++;
        cnd4++
        
      }
      
      if (carta1Pontos < carta2Pontos) {
        console.log("player 2 gg")
        player2Points++;
        g0++;
        cnd4++
        
      }


      
  
      carta2Um.style = "display: none;"
      carta102 = 0;
      buttonBattle.disabled = true;
    }
  }

  if (cnd5 == 0) {
    if (twoCard2.checked == true) {
      carta2Pontos = carta0202;
      
      if (carta1Pontos > carta2Pontos) {
        console.log("player 1 gg")
        player1Points++;
        g0++;
        cnd5++
      }
      if (carta1Pontos < carta2Pontos) {
        console.log("player 2 gg")
        player2Points++;
        g0++;
        cnd5++
      }
  
      carta2Dois.style = "display: none;"
      carta202 = 0;
    }
  }

  if (cnd6 == 0) {
    if (twoCard3.checked == true) {
      carta2Pontos = carta0302;
      
      if (carta1Pontos > carta2Pontos) {
        console.log("player 1 gg")
        player1Points++;
        g0++;
        cnd6++
      }
      if (carta1Pontos < carta2Pontos) {
        console.log("player 2 gg")
        player2Points++;
        g0++;
        cnd6++
      }
  
      carta2Tres.style = "display: none;"
    }
  }
    
    
    
    
  
  
  
  placarPontos();
  moveCards();
  
}
