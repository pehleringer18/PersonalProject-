function getJoke()
{
  // get request to API
  $.get("https://dad-jokes.p.rapidapi.com/random/joke", function(data)
  {
    $("#setup").html(data.setup);
    $("#punchline").html(data.punchline);
  });
}