document.getElementById("year").innerHTML = new Date().getFullYear()

var temp = document.lastModified
var n = parseInt(temp.substring(temp.length-8,temp.length-6))
if (n>12) {
    document.getElementById("updated").innerHTML = "Last Updated: "+
        temp.substring(0,temp.length-8)+(n-12)+temp.substring(temp.length-6)+" pm"
}
else {
    document.getElementById("updated").innerHTML = "Last Updated: "+
        temp+" am"
}

let now = new Date()
let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
document.querySelector('#headerDate').innerHTML = weekDays[now.getDay()]+", "
                                                          +months[now.getMonth()]+" "
                                                          +now.getDate()+", "
                                                          +now.getFullYear()

                                                          weekDays = now.getDay();

                                                          let message;
                                                          
                                                          if (weekDays == 1 || weekDays == 2) {
                                                              message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
                                                          } else {
                                                              message = 'Nothing for today.';
                                                          }
                                                          document.querySelector("#banner").innerHTML = message

function toggleMenu() {
    var temp = document.getElementsByClassName("toggler")[0]
    temp.classList.toggle("hide")
    if (temp.classList[1]=="hide") document.querySelector(".toggler > a").innerHTML = "&#9776; Menu"
    else document.querySelector(".toggler > a").innerHTML = "&#10006; Close"
                        }

var temp= document.getElementById("higher").textContent;
var wSpeed= document.getElementById("wind").textContent;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("wind_chill").innerHTML= windChill;

