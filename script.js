const weatherApiKey = "8d12cfba"
const searchPlaceApiKey = "83061f0656fa44dab98fd0dc25faa974"

function initialize(){
    let search_button = document.querySelector('#search-buttom')
    search_button.addEventListener('click', getNewLocation)
    let search_input = document.querySelector('#search-input')
    search_input.addEventListener('keypress', searchInputHandler)

    getUserWeather()
}

let timeoutID
function searchInputHandler(e){
    if (e.key == "Enter"){
        getNewLocation()
        return
    }

    clearTimeout(timeoutID)

    timeoutID = setTimeout(showAutocompleteOptions, 2 * 1000);
}

function showAutocompleteOptions(){
    let search_input = document.querySelector('#search-input')

    let autocompleteOptionBox = document.createElement("div")
    autocompleteOptionBox.id = "autocompleteOptionBox"

    search_input.appendChild(autocompleteOptionBox)
}

async function getUserLocation(){
    let user_ip = await fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(response => response.ip)
    
    let ip_location = await fetch(`http://ip-api.com/json/${user_ip}?fields=region,city`)
    .then(response => response.json())
    
    let user_city = ip_location.city + "," + ip_location.region
    
    return user_city
}

async function getWeather(city){
    let weather = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=${weatherApiKey}&city_name=${city}&fields=only_results`)
    .then(response => response.json())
    
    showWeather(weather)
}

function showWeather(weather){
    document.querySelector('#weather-img').src = `https://assets.hgbrasil.com/weather/icons/conditions/${weather.condition_slug}.svg`
    document.querySelector('#description').innerText = weather.description
    document.querySelector('#temperature').innerHTML = weather.temp + "<span>°C</span>"
    document.querySelector('#city').innerText = weather.city
    document.querySelector('#humidity').innerText = weather.humidity + '%'
    document.querySelector('#rain').innerText = weather.rain + " mm"
    document.querySelector('#sunset').innerText = weather.sunset

    let wind_speed = weather.wind_speedy.split(' ')[0]
    wind_speed = parseFloat(wind_speed)
    wind_speed = Math.round(wind_speed)
    document.querySelector('#wind-speed').innerText = wind_speed + " km/h"
}

async function getUserWeather(){
    const user_city = await getUserLocation()
    getWeather(user_city)
}

function getNewLocation(){
    let userInput = document.querySelector("#search-input").value

    if (userInput.length < 4){ return }

    callAutocompleteAPI(userInput)
}

async function callAutocompleteAPI(userInput){
    let url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${userInput}&lang=en&limit=1&type=city&format=json&apiKey=${searchPlaceApiKey}`

    let response = await fetch(url)
    .then(response => response.json())
    .then(response => response.results[0])

    getNewLocationIfValidResponse(response)
}

function getWeatherIfValidResponse(response){
    if(response == undefined){ return }
    if(response.rank.confidence_city_level < 0.7){ return }
    if(response.country_code != 'br'){ return }
    
    let newLocation = response.city + "," + response.state_code
    getWeather(newLocation)
}