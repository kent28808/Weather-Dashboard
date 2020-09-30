$(document).ready(
    function () {
        $("#search-button").on("click", function () {
            var search = $("#search-value").val()
            dosearch(search)
            $("#search-value").val("")
        })
        function dosearch (searchvalue) {
            //console.log(searchvalue)
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?appid=298e7cec3267bf8dbf8d5c54ff6dc6a7&units=imperial&q="+searchvalue,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    //console.log(data)
                    $("#today").empty()
                    var card = $("<div>").addClass("card")
                    var cardbody = $("<div>").addClass("card-body")
                    var title = $("<h3>").addClass("card-title").text(data.name)
                    var temperature = $("<p>").addClass("card-text").text("Temperature: "+ data.main.temp)
                    var units = $("<sup>").text("o")
                    temperature.append(units, $("<span>").text(" F"))
                    cardbody.append(title, temperature)
                    card.append(cardbody)
                    $("#today").append(card)
                }
            })
        }
    }
)