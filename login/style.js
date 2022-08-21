let btn = document.querySelector("#verSenha")

btn.addEventListener("click", ()=> {
  let ver = document.querySelector("#input-senha")
  
  if(ver.getAttribute("type") == "password") {
    ver.setAttribute("type", "text")
  }else{
    ver.setAttribute("type", "password")
  }
})

function entrar() {
  let email = document.getElementById("input-email")
  
  let senha = document.getElementById("input-senha")
  
  let msErro = document.getElementById("ms-erro")
  let listUser = []
  
  let userValid = {
    email: "",
    senha: ""
  }
  
  
  listUser = JSON.parse(localStorage.getItem("listUser"))
  
  listUser.forEach((item) => {
    if (email.value == item.email && senha.value == item.senha) {
      
      userValid = {
        email: item.emailCad,
        senha: item.senhaCad
      }
      
    }
  })
  
  
}

if (email.value == userValid.email && senha.value == userValid.senha) {
  window.location.href = ""
}else{
  email.focus()
}
  
  