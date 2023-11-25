const apiKey = "8d12cfba"

async function getUserCity(){
    let user_ip = await fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(response => response.ip)
    
    let ip_location = await fetch(`http://ip-api.com/json/${user_ip}?fields=region,city`)
    .then(response => response.json())
    
    let user_city = ip_location.city + "," + ip_location.region
    
    return user_city
}

async function getWeather(){
    const user_city = await getUserCity()
    let weather = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=${apiKey}&city_name=${user_city}&fields=only_results`)
    .then(response => response.json())
    
    showWeather(weather)
}

function showWeather(weather){
    console.log(weather)
}