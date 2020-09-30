$(document).ready(function () {
    $("#search-button").on("click", function () {
        var search = $("#search-value").val()
        dosearch(search)
        $("#search-value").val("")
    })
    
    function dosearch(searchvalue) {
        //console.log(searchvalue)
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?appid=298e7cec3267bf8dbf8d5c54ff6dc6a7&units=imperial&q=" + searchvalue,
            type: "GET",
            dataType: "json",
            success: function (data) {
                //console.log(data)
               
                $("#today").empty();
                var card = $("<div>").addClass("card");
                var cardbody = $("<div>").addClass("card-body");
                var title = $("<h4>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                var temperature = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp);
                var units = $("<sup>").text("o");
                var humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
                var windspeed = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH")

                temperature.append(units, $("<span>").text(" F"))
                cardbody.append(title, temperature, humidity, windspeed,)
                card.append(cardbody)
                $("#today").append(card)
                //need to figure out how to add UV index.

            }
        })
    }
}
);

function getForecast(searchvalue) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?appid=298e7cec3267bf8dbf8d5c54ff6dc6a7&units=imperial&q=" + searchvalue,
        type: "GET",
        dataType: "json",
        success: function (data) {
        $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");    
        
        }



    })
}

