

$("input").keypress(function(e) {
    if (e.charCode == 13) {
      clima(encodeURI($("input").val()));
    }
  });



  function clima(ciudad) {
    $.ajax({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es%27`,
      success: function(data) {
        console.log(data);
        $("#actual").text("Temp.:" + `${data.main.temp}`);
        $("#max").text("Temp. máx.: " + `${data.main.temp_max}`);
        $("#min").text("Temp. mín.: " + `${data.main.temp_min}`);
        $("#vel").text("Wind: " + `${data.wind.speed}`);
        $("#cond").text("Actual Description: " + `${data.weather[0].description}`);
        $("#pais").text("Country: " + data.sys.country);
      }
    });
  }
  
  $("button").each(function() {
    $(this).click(function() {
      clima($(this).text());
    });
  });
  