var cityName = document.querySelector('#cityname');
console.log(cityName);

var cityContainerEl = document.querySelector("#citylistContainer");
var cityIdCounter = 0;



function myFunction(event){
  
    event.preventDefault(); 

// Store it in local storage and add City name in the list as a button ( so upon clicking it it will fetch data of that city ) 

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

//----function for Today forecast ------------------------------------------------------
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

//---function for Next 5 days forecast ----------------------------------------------
function weatherdataFetch5Days() {

    var x = document.querySelector('#cityname').value;
    console.log(x);
    

   var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + x + "&appid=9d0a91c9414180869a1b366b5eca06bd";

   console.log(apiUrl);

  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);

    // --- Day 1 forecast ------------------------------------------------------------
    
   //data.list[0].dt
   var day1date = new Date(1627084800).toLocaleDateString("en-US")
   console.log(day1date);
   // expected output "8/30/2017"  


    var iconDay1El = document.querySelector('#iconDay1');
    var jpgImg1 = document.createElement('img');
    var iconUrl1 = "http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png";
    jpgImg1.setAttribute('src', iconUrl1);
    iconDay1El.innerHTML='';
    iconDay1El.appendChild(jpgImg1);

    var v1 = (data.list[2].main.temp) * 9/5;
    var t1 = v1 - 459.67;
    console.log(t1);
      document.getElementById("tempDay1").innerHTML = "Temp :  " + t1 + "*F" ; 
      document.getElementById("windDay1").innerHTML = "Wind :  " + data.list[2].wind.speed + "MPH"; 
      document.getElementById("humidityDay1").innerHTML = "Humidity : " + data.list[2].main.humidity + "%" ; 

   // --- Day 2 forecast ------------------------------------------------------
    
   var iconDay2El = document.querySelector('#iconDay2');
   var jpgImg2 = document.createElement('img');
   var iconUrl2 = "http://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png";
   jpgImg2.setAttribute('src', iconUrl2);
   iconDay2El.innerHTML='';
   iconDay2El.appendChild(jpgImg2);

   var v2 = (data.list[10].main.temp) * 9/5;
   var t2 = v2 - 459.67;
   console.log(t2);
     document.getElementById("tempDay2").innerHTML = "Temp :  " + t2 + "*F" ; 
     document.getElementById("windDay2").innerHTML = "Wind :  " + data.list[10].wind.speed + "MPH"; 
     document.getElementById("humidityDay2").innerHTML = "Humidity : " + data.list[10].main.humidity + "%" ; 
 
// --- Day 3 forecast ------------------------------------------------------
    
var iconDay3El = document.querySelector('#iconDay3');
var jpgImg3 = document.createElement('img');
var iconUrl3 = "http://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png";
jpgImg3.setAttribute('src', iconUrl3);
iconDay3El.innerHTML='';
iconDay3El.appendChild(jpgImg3);

var v3 = (data.list[18].main.temp) * 9/5;
var t3 = v3 - 459.67;
console.log(t3);
  document.getElementById("tempDay3").innerHTML = "Temp :  " + t3 + "*F" ; 
  document.getElementById("windDay3").innerHTML = "Wind :  " + data.list[18].wind.speed + "MPH"; 
  document.getElementById("humidityDay3").innerHTML = "Humidity : " + data.list[18].main.humidity + "%" ; 

  // --- Day 4 forecast ------------------------------------------------------
    
var iconDay4El = document.querySelector('#iconDay4');
var jpgImg4 = document.createElement('img');
var iconUrl4 = "http://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png";
jpgImg4.setAttribute('src', iconUrl4);
iconDay4El.innerHTML='';
iconDay4El.appendChild(jpgImg4);

var v4 = (data.list[26].main.temp) * 9/5;
var t4 = v4 - 459.67;
console.log(t4);
  document.getElementById("tempDay4").innerHTML = "Temp :  " + t4 + "*F" ; 
  document.getElementById("windDay4").innerHTML = "Wind :  " + data.list[26].wind.speed + "MPH"; 
  document.getElementById("humidityDay4").innerHTML = "Humidity : " + data.list[26].main.humidity + "%" ; 

  // --- Day 5 forecast ------------------------------------------------------
    
var iconDay5El = document.querySelector('#iconDay5');
var jpgImg5 = document.createElement('img');
var iconUrl5 = "http://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png";
jpgImg5.setAttribute('src', iconUrl5);
iconDay5El.innerHTML='';
iconDay5El.appendChild(jpgImg5);

var v5 = (data.list[34].main.temp) * 9/5;
var t5 = v5 - 459.67;
console.log(t5);
  document.getElementById("tempDay5").innerHTML = "Temp :  " + t5 + "*F" ; 
  document.getElementById("windDay5").innerHTML = "Wind :  " + data.list[34].wind.speed + "MPH"; 
  document.getElementById("humidityDay5").innerHTML = "Humidity : " + data.list[34].main.humidity + "%" ; 


           }) 
       })
}

  



// add next 5 days date in cards respectively -------------------------------

//day1 = moment().add(1, 'days').calendar();
//console.log(day1);

//b = moment().format('L');
//var new_date = moment(b, "MM-DD-YYYY").add(1, 'day');
//console.log(new_date.value);


//day2 = moment().add(2, 'days').calendar();  
//day3 = moment().add(3, 'days').calendar(); 
//day4 = moment().add(4, 'days').calendar();
//day5 = moment().add(5, 'days').calendar();  