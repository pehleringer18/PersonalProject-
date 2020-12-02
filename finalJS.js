function joke()
{
  // get request to API
  $.get("https://official-joke-api.appspot.com/jokes/random", function(data)
  {
    $("#joke").html(data.setup + "<br>" + "..." + "<br>" + data.punchline);
  });
}