// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5861897&units=imperial&appid=9ad19c57501165d8d98cb691756a8d53";
// const imgURL = "https://openweathermap.org/img/w/";
// const k2f = (K) => {
//     return (K - 273.15)* 1.8000 + 32.00;
// }
// const rnd = (n,d) => {
//     return (Math.round(n*10**d)/10**d);
// }

// fetch(apiUrl)
//     .then(res => { res.json()
    
//     .then(jsonData => {
//         console.log(jsonData);
//         document.querySelector('#current-temp').textContent = rnd(k2f(jsonData.list[0].main.temp),1);

//         const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
//         const desc = jsObject.weather[0].description;
//         document.querySelector('#icon-src').textContent = iconsrc;
//         document.querySelector('#weathericon').setAttribute('src', iconsrc);
//         document.querySelector('#weathericon').setAttribute('alt', desc);
//         document.querySelector('figcaption').textContent = desc;
//     })
//  })

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5861897&units=imperial&appid=9ad19c57501165d8d98cb691756a8d53";

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });