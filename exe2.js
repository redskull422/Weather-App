///////////////////////Weather-App//////////////////////

let citiesData = {
    tehran : {city:"Tehran", temp:12 , weather : "Rainy", humidity : 73, windSpeed :31},
    tabriz : {city:"Tabriz", temp:6 , weather : "Snowy", humidity : 90, windSpeed :42},
    mashhad : {city:"Mashhad", temp:16 , weather : "Sunny", humidity : 14, windSpeed :12},
    shiraz : {city:"Shiraz", temp:9 , weather : "Cloudy", humidity : 20, windSpeed :32},
    esfahan : {city:"Esfahan", temp:23 , weather : "Sunny", humidity : 12, windSpeed :22},
}
let $ = document
let searchBtn = $.getElementById("search")
let searchBar = $.querySelector(".search-bar")

searchBtn.addEventListener("click",()=>{
    let searchBarValue = searchBar.value 
    let mainCityData = citiesData[searchBarValue]

    if(mainCityData){
        $.querySelector(".city").innerHTML="Weather in "+ mainCityData.city
        $.querySelector(".temp").innerHTML = mainCityData.temp + "°C"
        $.querySelector(".description").innerHTML = mainCityData.weather
        $.querySelector(".humidity").innerHTML = "Humidity : " + mainCityData.humidity + "%"
        $.querySelector(".wind").innerHTML = "WindSpeed : "+mainCityData.windSpeed + " km/h"
        $.querySelector(".weather").classList.remove("loading")
    }else{
        alert("Wrong Input")
    }
})