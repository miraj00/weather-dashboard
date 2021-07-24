var cityName = document.querySelector('#cityname');
console.log(cityName);

var cityContainerEl = document.querySelector("#citylistContainer");
var cityIdCounter = 0;



function myFunction(event)  {
  
    event.preventDefault(); 

// Store it in local storage and add City name in the list as a button
// ( so upon clicking it it will fetch data of that city ) --------------------

    localStorage.setItem ("city", cityName.value);

    var citylistEl = document.createElement("li");
    citylistEl.className = "citys";
    citylistEl.setAttribute("city-id", cityIdCounter);
    citylistEl.innerHTML = cityName.value;
    
    cityContainerEl.appendChild(citylistEl);
   
    weatherdataFetchtoday();
    weatherdataFetch5Days();
    
// add current City -------------------------------------------- 
var x = document.querySelector('#cityname').value;
console.log(x);
b = moment().format('L');
var c = x + "   (  " + b + "  )"; 
document.getElementById("currentCity&Dt").innerHTML = c; 
//  + data.list[0].weather.icon ;

}

//----function for Today forecast -----------------------------------------------
//-------------------------------------------------------------------------------
function weatherdataFetchtoday() {

var x = document.querySelector('#cityname').value;
console.log(x);

var apiUrl0 = "https://api.openweathermap.org/data/2.5/weather?q=" + x + "&appid=9d0a91c9414180869a1b366b5eca06bd";
console.log(apiUrl0);

fetch(apiUrl0).then(function(response0) {
  response0.json().then(function(data0) {
    console.log(data0);

var iconDay0El = document.querySelector('#iconDay0');
var jpgImg0 = document.createElement('img');
var iconUrl0 = "http://openweathermap.org/img/w/" + data0.weather[0].icon + ".png";
jpgImg0.setAttribute('src', iconUrl0);
iconDay0El.innerHTML='';
iconDay0El.appendChild(jpgImg0);

var v0 = (data0.main.temp) * 9/5;
var t0 = v0 - 459.67;
console.log(t0);
document.getElementById("tempNow").innerHTML = "Temp :  " + t0 + " *F" ; 
document.getElementById("windNow").innerHTML = "Wind :  " + data0.wind.speed + " MPH" ; 
document.getElementById("humidityNow").innerHTML = "Humidity : " + data0.main.humidity + "%" ; 
//   document.getElementById("uvIndexNow").innerHTML = data.list[0].main.temp ; 


})
})
}

//---function for Next 5 days forecast -------------------------------------------------
//--------------------------------------------------------------------------------------
function weatherdataFetch5Days() {

   // const unixTimestamp1 = data.list[0].dt;

    
    var x = document.querySelector('#cityname').value;
    console.log(x);
    

   var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + x + "&appid=9d0a91c9414180869a1b366b5eca06bd";

   console.log(apiUrl);

  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);

    // --- Day 1 forecast ------------------------------------------------------------
 
   const milliseconds = data.list[4].dt * 1000;
   const dateObject = new Date(milliseconds);
   const humanDateFormat = dateObject.toLocaleString("en-US", {timeZoneName: "short"}) 
   console.log(humanDateFormat);
   document.getElementById("day1Date").innerHTML = humanDateFormat;

   var iconDay1El = document.querySelector('#iconDay1');
   var jpgImg1 = document.createElement('img');
   var iconUrl1 = "http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png";
   jpgImg1.setAttribute('src', iconUrl1);
   iconDay1El.innerHTML='';
   iconDay1El.appendChild(jpgImg1);

   var v1 = (data.list[4].main.temp) * 9/5;
   var t1 = v1 - 459.67;
   console.log(t1);
   document.getElementById("tempDay1").innerHTML = "Temp :  " + t1 + "*F" ; 
   document.getElementById("windDay1").innerHTML = "Wind :  " + data.list[4].wind.speed + "MPH"; 
   document.getElementById("humidityDay1").innerHTML = "Humidity : " + data.list[4].main.humidity + "%" ; 

   // --- Day 2 forecast ------------------------------------------------------
   
   const milliseconds2 = data.list[12].dt * 1000;
   const dateObject2 = new Date(milliseconds2);
   const humanDateFormat2 = dateObject2.toLocaleString("en-US", {timeZoneName: "short"}) 
   console.log(humanDateFormat2);
   document.getElementById("day2Date").innerHTML = humanDateFormat2;


   var iconDay2El = document.querySelector('#iconDay2');
   var jpgImg2 = document.createElement('img');
   var iconUrl2 = "http://openweathermap.org/img/w/" + data.list[12].weather[0].icon + ".png";
   jpgImg2.setAttribute('src', iconUrl2);
   iconDay2El.innerHTML='';
   iconDay2El.appendChild(jpgImg2);

   var v2 = (data.list[12].main.temp) * 9/5;
   var t2 = v2 - 459.67;
   console.log(t2);
     document.getElementById("tempDay2").innerHTML = "Temp :  " + t2 + "*F" ; 
     document.getElementById("windDay2").innerHTML = "Wind :  " + data.list[12].wind.speed + "MPH"; 
     document.getElementById("humidityDay2").innerHTML = "Humidity : " + data.list[12].main.humidity + "%" ; 
 
// --- Day 3 forecast ------------------------------------------------------

const milliseconds3 = data.list[20].dt * 1000;
const dateObject3 = new Date(milliseconds3);
const humanDateFormat3 = dateObject3.toLocaleString("en-US", {timeZoneName: "short"}) 
console.log(humanDateFormat3);
document.getElementById("day3Date").innerHTML = humanDateFormat3;

var iconDay3El = document.querySelector('#iconDay3');
var jpgImg3 = document.createElement('img');
var iconUrl3 = "http://openweathermap.org/img/w/" + data.list[20].weather[0].icon + ".png";
jpgImg3.setAttribute('src', iconUrl3);
iconDay3El.innerHTML='';
iconDay3El.appendChild(jpgImg3);

var v3 = (data.list[20].main.temp) * 9/5;
var t3 = v3 - 459.67;
console.log(t3);
  document.getElementById("tempDay3").innerHTML = "Temp :  " + t3 + "*F" ; 
  document.getElementById("windDay3").innerHTML = "Wind :  " + data.list[20].wind.speed + "MPH"; 
  document.getElementById("humidityDay3").innerHTML = "Humidity : " + data.list[20].main.humidity + "%" ; 

  // --- Day 4 forecast ------------------------------------------------------
  const milliseconds4 = data.list[28].dt * 1000;
  const dateObject4 = new Date(milliseconds4);
  const humanDateFormat4 = dateObject4.toLocaleString("en-US", {timeZoneName: "short"}) 
  console.log(humanDateFormat4);
  document.getElementById("day4Date").innerHTML = humanDateFormat4;
  
var iconDay4El = document.querySelector('#iconDay4');
var jpgImg4 = document.createElement('img');
var iconUrl4 = "http://openweathermap.org/img/w/" + data.list[28].weather[0].icon + ".png";
jpgImg4.setAttribute('src', iconUrl4);
iconDay4El.innerHTML='';
iconDay4El.appendChild(jpgImg4);

var v4 = (data.list[28].main.temp) * 9/5;
var t4 = v4 - 459.67;
console.log(t4);
  document.getElementById("tempDay4").innerHTML = "Temp :  " + t4 + "*F" ; 
  document.getElementById("windDay4").innerHTML = "Wind :  " + data.list[28].wind.speed + "MPH"; 
  document.getElementById("humidityDay4").innerHTML = "Humidity : " + data.list[28].main.humidity + "%" ; 

  // --- Day 5 forecast ------------------------------------------------------

  const milliseconds5 = data.list[36].dt * 1000;
  const dateObject5 = new Date(milliseconds5);
  const humanDateFormat5 = dateObject5.toLocaleString("en-US", {timeZoneName: "short"}) 
  console.log(humanDateFormat5);
  document.getElementById("day5Date").innerHTML = humanDateFormat5;
  
var iconDay5El = document.querySelector('#iconDay5');
var jpgImg5 = document.createElement('img');
var iconUrl5 = "http://openweathermap.org/img/w/" + data.list[36].weather[0].icon + ".png";
jpgImg5.setAttribute('src', iconUrl5);
iconDay5El.innerHTML='';
iconDay5El.appendChild(jpgImg5);

var v5 = (data.list[36].main.temp) * 9/5;
var t5 = v5 - 459.67;
console.log(t5);
  document.getElementById("tempDay5").innerHTML = "Temp :  " + t5 + "*F" ; 
  document.getElementById("windDay5").innerHTML = "Wind :  " + data.list[36].wind.speed + "MPH"; 
  document.getElementById("humidityDay5").innerHTML = "Humidity : " + data.list[36].main.humidity + "%" ; 


           }) 
       })
}

  