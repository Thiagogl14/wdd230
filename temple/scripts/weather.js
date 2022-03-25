const api_key = '9ad19c57501165d8d98cb691756a8d53'
const cityId = 4348599
const imgURL = 'https://openweathermap.org/img/w/'
const rnd = (n,d) => {
    return (Math.round(n*10**d)/10**d)
}

fetch('https://api.openweathermap.org/data/2.5/weather?id='+cityId+'&units=imperial&appid='+api_key)
    .then(res => {
        return res.json()
    })
    .then(jsonData => {
        document.querySelector('.summary .currently').innerHTML = jsonData.weather[0].main+' <span>'+rnd(jsonData.main.temp,1)+'</span>&deg;F'
        document.querySelector('.summary .temperature').textContent = rnd(jsonData.main.temp_max,1)
        document.querySelector('.summary .humidity').textContent = jsonData.main.humidity+'%'
        document.querySelector('.summary .wind-speed').textContent = jsonData.wind.speed
        console.log(jsonData)
        let t = parseFloat(document.querySelector('.currently span').innerHTML)
        let s = parseFloat(document.querySelector('.wind-speed').innerHTML)
        let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))
        const iconsrc= `https://openweathermap.org/img/w/${jsonData.weather[0].icon}.png`;
        const desc = jsonData.weather[0].description;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        if (t <= 50.0 && s > 3.0) {
            document.querySelector('.wind-chill').innerHTML = rnd(chillFactor,1)
        }
        else {
            document.querySelector('.colored.chill').innerHTML = 'N/A'
        }
    })