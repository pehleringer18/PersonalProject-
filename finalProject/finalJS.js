function getJoke()
{
  // get request to API
  $.get("https://api.chucknorris.io/jokes/random", function(data)
  {
    $("#setup").html(data.setup);
    $("#punchline").html(data.value);
  });
}