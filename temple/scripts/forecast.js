// const API_KEY = '9ad19c57501165d8d98cb691756a8d53'
// const CITY_ID = 4348599
const IMG_URL = 'https://openweathermap.org/img/w/'
const urlWeather = 'http://api.openweathermap.org/data/2.5/forecast?id={4348599}&units=imperial&appid={08c137edc54134a547dd73969b24048a}'
fetch(urlWeather)
    .then(res => {
        return res.json()
    })
    .then(jsonData => {console.log(jsonData)
        jsonData.list.filter(item => item['dt_txt'].includes('18:00:00'))
            .forEach((elem,index) => {

                document.querySelector('#day'+(index+1)+' + .weather-icon')
                    .innerHTML = '<img alt=\'\' src=\''+IMG_URL+elem.weather[0].icon+'.png\'>'
                document.querySelector('#day'+(index+1)+' ~ span')
                    .innerHTML = rnd(elem.main.temp,1)+'&deg;F'
            })
    })

	var days = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat" ]
    var today = new Date().getDay()
    for (let i = 0; i<5; i++) document.getElementById("day"+(i+1)).innerHTML = days[(today+i)%days.length]