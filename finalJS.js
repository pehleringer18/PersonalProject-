function getJoke()
{
  // get request to API
  $.get("https://official-joke-api.appspot.com/jokes/random", function(data)
  {
    $("#setup").html(data.setup + "...");
    $("#punchline").html(data.punchline);
  });
}

function getImage()
{
    document.laughing.src="laughingFace.jpg";
}