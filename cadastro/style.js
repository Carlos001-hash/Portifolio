let btn = document.getElementById("verSenha")
let btnConfirm = document.getElementById("verConfirmSenha")

let nome = document.getElementById("input-name")
let labelNome = document.getElementById("label-name")
let = validNome = false;

let sobrenome = document.getElementById("input-sobrenome")
let labelSobrenome = document.getElementById("label-sobrenome")
let = validSobrenome = false;

let email = document.getElementById("input-email")
let labelEmail = document.getElementById("label-email")
let = validEmail = false;

let numero = document.getElementById("input-number")
let labelNumero = document.getElementById("label-number")
let = validNumero = false;

let senha = document.getElementById("input-senha")
let labelSenha = document.getElementById("label-senha")
let = validSenha = false;

let confirmarSenha = document.getElementById("input-confirmar-senha") 
let labelConfirmarSenha = document.getElementById("label-confirmar-senha")
let = validComfirmarSenha = false;

let msErro = document.getElementById("ms-erro")

btn.addEventListener("click", ()=> {
  let ver = document.querySelector("#input-senha")
  
  if(ver.getAttribute("type") == "password") {
    ver.setAttribute("type", "text")
    btn.innerHTML = "Ocultar";
    btn.style = "padding: 8px 11px 8px 11.5px;"
  }else{
    ver.setAttribute("type", "password")
    btn.innerHTML = "Mostrar"
    btn.style = "padding: 8px 10px 8px 10px;"
  }
})

btnConfirm.addEventListener("click", ()=> {
  let ver = document.querySelector("#input-confirmar-senha")
  
  if(ver.getAttribute("type") == "password") {
    ver.setAttribute("type", "text")
    btnConfirm.innerHTML = "Ocultar"
    btnConfirm.style = "padding: 8px 11px 8px 11.5px;"
  }else{
    ver.setAttribute("type", "password")
    btnConfirm.innerHTML = "Mostrar"
    btnConfirm.style = "padding: 8px 10px 8px 10px;"
  }
})

nome.addEventListener("keyup", () => {
  if (nome.value.length < 3) {
    labelNome.style = "color: red; font-size: 12.5px;"
    labelNome.innerHTML = "Nome *no minimo 3 caracteres"
    nome.style = "border: 1.5px solid #ff0000;"
    validNome = false
  }else {
    labelNome.style = "color: #ffffff;"
    labelNome.innerHTML = "Nome"
    nome.style = "border: 1.5px solid #ddddd;"
    validNome = true
  }
})

sobrenome.addEventListener("keyup", () => {
  if (sobrenome.value.length < 3) {
    labelSobrenome.style = "color: red; font-size: 12.5px;"
    labelSobrenome.innerHTML = "Sobrenome *no minimo 3 caracteres"
    sobrenome.style = "border: 1.5px solid #ff0000;"
    validSobrenome = false
  }else {
    labelSobrenome.style = "color: #ffffff;"
    labelSobrenome.innerHTML = "Sobrenome"
    sobrenome.style = "border: 1.5px solid #ddddd;"
    validSobrenome = true
  }
})

email.addEventListener("keyup", () => {
  if (email.value.length < 13) {
    labelEmail.style = "color: red; font-size: 12.5px;"
    labelEmail.innerHTML = "E-mail *no minimo 13 caracteres"
    email.style = "border: 1.5px solid #ff0000;"
    validEmail = false
  }else {
    labelEmail.style = "color: #ffffff;"
    labelEmail.innerHTML = "E-mail"
    email.style = "border: 1.5px solid #ddddd;"
    validEmail = true
  }
})

numero.addEventListener("keyup", () => {
  if (numero.value.length < 8) {
    labelNumero.style = "color: red; font-size: 12.5px;"
    labelNumero.innerHTML = "Numero *no minimo 8 caracteres"
    numero.style = "border: 1.5px solid #ff0000;"
    validNumero = false
  }else {
    labelNumero.style = "color: #ffffff;"
    labelNumero.innerHTML = "Nome"
    numero.style = "border: 1.5px solid #ddddd;"
    validNumero = true
  }
})

senha.addEventListener("keyup", () => {
  if (senha.value.length < 5) {
    labelSenha.style = "color: red; font-size: 12px;"
    labelSenha.innerHTML = "*no minimo 5 caracteres"
    senha.style = "border: 1.5px solid #ff0000;"
    validSenha = false
  }else {
    labelSenha.style = "color: #ffffff;"
    labelSenha.innerHTML = "Senha"
    senha.style = "border: 1.5px solid #ddddd;"
    validSenha = true
  }
})

confirmarSenha.addEventListener("keyup", () => {
  if (confirmarSenha.value != senha.value) {
    labelConfirmarSenha.style = "color: red; font-size: 11px;"
    labelConfirmarSenha.innerHTML = "*senhas não correspondem"
    confirmarSenha.style = "border: 1.5px solid #ff0000;"
    validComfirmarSenha = false
  }else {
    labelConfirmarSenha.style = "color: #ffffff;"
    labelConfirmarSenha.innerHTML = "Comfirmar senha"
    confirmarSenha.style = "border: 1.5px solid #ddddd;"
    validComfirmarSenha = true
  }
})

function entrar() {
  if (validNome && validSobrenome && validEmail && validNumero && validSenha && validComfirmarSenha == true) {
    let listUser = JSON.parse(localStorage.getItem("listUser") || "[]")
  
    listUser.push ({
      nome: nome.value,
      email: email.value,
      senha: senha.value
    })
    
    
    localStorage.setItem("listUser", JSON.stringify(listUser))
    window.location.href = ""
  }else{
    msErro.style = "color: red;"
    msErro.innerHTML = "Preencha os campos corretamente*"
    email.focus()
  }
}
  
  