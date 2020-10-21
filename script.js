// let searchData = $(".search-data")
// let cityList = [];
// init();
// listButton();
// searchButton();
// storeCities();
$(document).ready(function(){
$("#run-search").on("click", function(event) {
    event.preventDefault();

    let city = $("#search-input").val();
console.log(city)

    getWeather(city);
});

//save cities into local storage
// function storeCities() {
//     localStorage.setItem("cities", JSON.stringify(listOfCities));
// }

// $(".history").on("click", "li", function() {
//     getWeather($(this).text());
//   });

// function makeRow(text) {
   
//     var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
//      $(".history").append(li)
//      }

function getWeather(city) {
let APIKey = "63dbd153e65dc57a0e639b1071efe861";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (data) {
console.log(data)
// makeRow(city)
// var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
//         var card = $("<div>").addClass("card");
//         var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
//         var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
//         var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
//         var cardBody = $("<div>").addClass("card-body");
//         var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
//         // merge and add to page
//         title.append(img);
//         cardBody.append(title, temp, humid, wind);
//         card.append(cardBody);
//         $("#today").append(card);
})
}
//AJAX call URL

// function APIcalls();

//API Call
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
// }
})