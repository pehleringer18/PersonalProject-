function getJoke()
{
  // get request to API
  $.get("https://dad-jokes.p.rapidapi.com/random/joke", function(data)
  {
    $("body.setup").html(data.setup);
    $("body.punchline").html(data.punchline);
  });
}