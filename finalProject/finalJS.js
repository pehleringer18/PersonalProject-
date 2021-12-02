// Parts of the code were based off of the example on 
// https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

// This will create a box that each joke will go in, 
// a new box is created for each joke
document.getElementById('getJoke').onclick = function() {
  var request = new XMLHttpRequest()
  var url = 'https://api.chucknorris.io/jokes/random?category=' + document.getElementById('category').value
  request.open('GET', url, true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const p = document.createElement('p')
      data.value = data.value.substring(0, 300)
      p.textContent = `${data.value}...`

      container.appendChild(card)
      card.appendChild(p)
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage)
    }
  }

  request.send()
}

// This will clear the screen of all the jokes 
document.getElementById('clearJoke').onclick = function() {
  //document.getElementById('root').innerHTML = "";
  document.getElementById('container').innerHTML = "";
}
