url = 'https://api.chucknorris.io/jokes/random';

document.getElementById('getJoke').onclick = function() {
  let response = await fetch(url);
  console.log(response.status);

  let json = await response.json();
  console.log(json);
  document.getElementById('punchline').innerHTML = json.value;
}