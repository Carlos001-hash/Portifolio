/*class Person {
        constructor (name) {
          this._name = name;
        }

        set eeee(string) {
          this._name = string;
        }

        get rrr() {
          return this._name;
        }

        walk() {
          return `${this._name} é o meu nome`
        }
      }

      let casco = new Person("Alfredo")

      console.log(casco.walk())
      casco.eee = "Fred"
      console.log(casco.eee)
      console.log(casco.rrr)*/

      const userCardTemplate = document.getElementById("[data-user-template]")
      const userCardContainer = document.getElementById("[data-user-cards-container]")
      const searchInput = document.getElementById("[data-search]")

      let users = []

      searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        users.forEach(user => {
          const isVisible = 
            user.name.toLowerCase().includes(value) || 
            user.name.toLowerCase().includes(value)
          user.element.classList.toggle("hide", !isVisible) 
        })
      })

      fetch("https://jsomplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        users = data.map(user => {
          const card = userCardTemplate.content.cloneNode(true).children[0]
          const header = card.querySelector("[data-header]")
          const body = card.querySelector("[data-body]")
          header.textContent = user.nome
          body.textContent = user.email
          userCardContainer.append(card)
          return { name: user.name, email: user.email, element: card }
        })
      })

/*fetch('https://reqres.in/api/users')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR'))*/

/*fetch('https://reqres.in/api/users')
.then(res => {
      if (res.ok) {
  console.log('Success')
} else {
  console.log("Not Successful")
}
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))*/

/*fetch('https://reqres.in/api/users', {
method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
}).then(res => {
  return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))*/

//////////////////////////////////////////////////////////
/*let nome = "carlos eduardo";
let apelido = "cadu";

function capitalizeFirst(str) {
  const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
  return subst;
}

console.log(capitalizeFirst(nome));
console.log(capitalizeFirst(apelido));*/

