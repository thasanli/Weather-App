// declare variables ans select elementes

var ROOT_URL = "http://api.openweathermap.org/data/2.5/weather?zip="
var API_KEY = "38d5c95e93fcb766844277029f737668"

// select the elements cityTitle, zip input bar, weather div, img with class icon, span with class temp, span with class humid , select the span with class deg

var cityTitle = document.querySelector(".cityTitle")
var zip = document.querySelector(".zip")
var weather = document.querySelector(".weather")
var icon = document.querySelector(".icon")
var temp = document.querySelector(".temp")
var humid = document.querySelector(".humid")
var deg = document.querySelector(".deg")
var icons = {
    "Clouds" : "img/cloudy.png",
    "Thunderstorm" : "img/thunderstorm.png"
}

// dedine functions 
function iconSelector(weather){
    return icons[weather]
}
function kelvinToFaren(kelvin) {
    return Math.round((kelvin * 9 / 5) - 459.67)
}


function getWeather(zipCode) {
    // console.log(zipCode)
    $.ajax({
        type: "GET",
        url: `${ROOT_URL}${zipCode},us&appid=${API_KEY}`,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            cityTitle.textContent = data.name
            weather.textContent = data.weather[0].main
            temp.textContent = kelvinToFaren(data.main.temp)
            humid.textContent = data.main.humidity
            icon.src = iconSelector(data.weather[0].main)
        },

        error: function (error) {
            console.log("There was an error")

        }
    })
}

// call functions and/or event listener

zip.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        getWeather(zip.value)
    }
}

)
getWeather(33139)