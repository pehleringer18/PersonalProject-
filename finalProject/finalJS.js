// Parts of the code were based off of the example on 
// https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'laughingFace.jpg'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

document.getElementById('getJoke').onclick = function() {
  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.chucknorris.io/jokes/random', true)
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