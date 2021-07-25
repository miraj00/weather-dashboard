var cityName = document.querySelector('#cityname');
console.log(cityName);
var cityContainerEl = document.querySelector("#citylistContainer");
var cityIdCounter = 0;
var cityClickedName = document.querySelector ("#city-id[i]");
//--------------------------------------------------------------------------------------------------

// upon clicking history tab, city name from it gets added to input field and button click function proceeds-----

cityContainerEl.addEventListener('click', updateFunction);

function updateFunction(event) {

    

    // Selecting the input element and get its value 
    // var inputVal = document.getElementById('city-id').value;
    //let textContent = document.querySelector('cityContainerEl').innerText;
   // var textContent = document.getElementById('cityContainerEl').value;

   var inputVal = event.target.getAttribute("city-id");
    console.log(inputVal);

    var inputVal2 = event.target.getAttribute("city-id").value;
    console.log(inputVal2);

    localStorage.setItem ("cityHx", inputVal);
    var inputVal2 = localStorage.getItem("cityHx");
    document.getElementById("cityname").innerHTML = inputVal2;
   
     
}


//then it updates all weather data

//    document.getElementById("#cityname").innerHTML = cityName;
//    citylistEl.innerHTML = cityName.value;
//    localStorage.setItem ("tasks1", cityName);
//    cityName = x;

//--------------Function that saves searched city in local storage ---------------------------------------------------------------------------------------
function myFunction(event)  {
    event.preventDefault(); 

 // Store city name in local storage and add in the list of a search history ( so upon clicking it it will fetch data of that city ) --------------------
    localStorage.setItem ("city", cityName.value);

    var citylistEl = document.createElement("li");
    citylistEl.className = "citys";
    citylistEl.setAttribute("city-id", cityIdCounter);
    citylistEl.innerHTML = cityName.value;
    cityIdCounter++
    cityContainerEl.appendChild(citylistEl);
   
    weatherdataFetch();
    
    // adds current City ------------------------------------------ 
    var x = document.querySelector('#cityname').value;
    console.log(x);

    // adds today's date next to city name ------------------------
    b = moment().format('L');
    var c = x + "   (  " + b + "  )"; 
    document.getElementById("currentCity&Dt").innerHTML = c; 
}

//--------------------------function for current and 5 Days forecast -----------------------------------------------

function weatherdataFetch() {

    var x = document.querySelector('#cityname').value;
    console.log(x);

    //---- First URL will get longitude, latitude and additionally current data --------------------------
    var apiUrl0 = "https://api.openweathermap.org/data/2.5/weather?q=" + x + "&appid=9d0a91c9414180869a1b366b5eca06bd";
    console.log(apiUrl0);

    fetch(apiUrl0).then(function(response0) {

    response0.json().then(function(data0) {
    console.log(data0);
        
    var iconDay0El = document.querySelector('#iconDay0');    // <------------------------- adding image icon 
    var jpgImg0 = document.createElement('img');
    var iconUrl0 = "https://openweathermap.org/img/w/" + data0.weather[0].icon + ".png";
    jpgImg0.setAttribute('src', iconUrl0);
    iconDay0El.innerHTML='';
    iconDay0El.appendChild(jpgImg0);

    var v0 = (data0.main.temp) * 9/5;      // <----------  converting from kelvin to *F by multiplying and subtracting
    var t0 = v0 - 459.67;
    console.log(t0);
    let t0fixed = t0.toFixed(2)     //<------------ limiting temperature decimals to 2
    document.getElementById("tempNow").innerHTML = "Current Temp :  " + t0fixed + " *F" ; 
    document.getElementById("windNow").innerHTML = "Current Wind :  " + data0.wind.speed + " MPH" ; 
    document.getElementById("humidityNow").innerHTML = "Current Humidity : " + data0.main.humidity + " %" ; 
  
 // --------Getting longitude and Latitude values from apiUrl0 and passing on to get OneCall Weather for UVI index & Next 5 days data---------- 
    var longitude = data0.coord.lon;
    console.log(longitude);
    
    var latitude = data0.coord.lat;
    console.log(latitude);

    var apiUrl1= "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=9d0a91c9414180869a1b366b5eca06bd";
    console.log(apiUrl1);

    fetch(apiUrl1).then(function(response1) {
    response1.json().then(function(data1) {
    console.log(data1);


    var UVI = data1.current.uvi;
    console.log(UVI);
     if (UVI < 3 ) {
        uvIndexNow.style.backgroundColor= "rgb(97, 211, 240)";
     } else if (UVI >=3 & UVI <=6) {
        uvIndexNow.style.backgroundColor= "rgb(218, 231, 31)";
     } else {
        uvIndexNow.style.backgroundColor= "rgb(245, 8, 8)";
     }

    document.getElementById("uvIndexNow").innerHTML = data1.current.uvi; 

//------------------------------------------------ Next 5 days forecast -------------------------------------------------

  // --- Day 1 forecast ------------------------------------------------------------
   const milliseconds = data1.daily[1].dt * 1000;             // <------------------converting Unix date into readable format        
   const dateObject = new Date(milliseconds);
   const humanDateFormat = dateObject.toLocaleString("en-US", {timeZoneName: "short"}) 
   console.log(humanDateFormat);
   document.getElementById("day1Date").innerHTML = humanDateFormat;  //<---------------------adding date via innerHTML 

   var iconDay1El = document.querySelector('#iconDay1');
   var jpgImg1 = document.createElement('img');
   var iconUrl1 = "https://openweathermap.org/img/w/" + data1.daily[1].weather[0].icon + ".png";
   jpgImg1.setAttribute('src', iconUrl1);
   iconDay1El.innerHTML='';
   iconDay1El.appendChild(jpgImg1);

   var v1 = (data1.daily[1].temp.day) * 9/5;
   var t1 = v1 - 459.67;
   console.log(t1);
   let t1fixed = t1.toFixed(2) 
   document.getElementById("tempDay1").innerHTML = "Temp :  " + t1fixed + " *F" ; 
   document.getElementById("windDay1").innerHTML = "Wind :  " + data1.daily[1].wind_speed + " MPH"; 
   document.getElementById("humidityDay1").innerHTML = "Humidity : " + data1.daily[1].humidity + " %" ; 

  // --- Day 2 forecast ------------------------------------------------------
   
   const milliseconds2 = data1.daily[2].dt * 1000;
   const dateObject2 = new Date(milliseconds2);
   const humanDateFormat2 = dateObject2.toLocaleString("en-US", {timeZoneName: "short"}) 
   console.log(humanDateFormat2);
   document.getElementById("day2Date").innerHTML = humanDateFormat2;

   var iconDay2El = document.querySelector('#iconDay2');
   var jpgImg2 = document.createElement('img');
   var iconUrl2 = "https://openweathermap.org/img/w/" + data1.daily[2].weather[0].icon + ".png";
   jpgImg2.setAttribute('src', iconUrl2);
   iconDay2El.innerHTML='';
   iconDay2El.appendChild(jpgImg2);

   var v2 = (data1.daily[2].temp.day) * 9/5;
   var t2 = v2 - 459.67;
   console.log(t2);
   let t2fixed = t2.toFixed(2) 
   document.getElementById("tempDay2").innerHTML = "Temp :  " + t2fixed + " *F" ; 
   document.getElementById("windDay2").innerHTML = "Wind :  " + data1.daily[2].wind_speed + " MPH"; 
   document.getElementById("humidityDay2").innerHTML = "Humidity : " + data1.daily[2].humidity + " %" ; 
 
// --- Day 3 forecast ------------------------------------------------------

   const milliseconds3 = data1.daily[3].dt * 1000;
   const dateObject3 = new Date(milliseconds3);
   const humanDateFormat3 = dateObject3.toLocaleString("en-US", {timeZoneName: "short"}) 
   console.log(humanDateFormat3);
   document.getElementById("day3Date").innerHTML = humanDateFormat3;

   var iconDay3El = document.querySelector('#iconDay3');
   var jpgImg3 = document.createElement('img');
   var iconUrl3 = "https://openweathermap.org/img/w/" + data1.daily[3].weather[0].icon + ".png";
   jpgImg3.setAttribute('src', iconUrl3);
   iconDay3El.innerHTML='';
   iconDay3El.appendChild(jpgImg3);

   var v3 = (data1.daily[3].temp.day) * 9/5;
   var t3 = v3 - 459.67;
   console.log(t3);
   let t3fixed = t3.toFixed(2) 
   document.getElementById("tempDay3").innerHTML = "Temp :  " + t3fixed + " *F" ; 
   document.getElementById("windDay3").innerHTML = "Wind :  " + data1.daily[3].wind_speed + " MPH"; 
   document.getElementById("humidityDay3").innerHTML = "Humidity : " + data1.daily[3].humidity + " %" ; 

  // --- Day 4 forecast ------------------------------------------------------
   const milliseconds4 = data1.daily[4].dt * 1000;
   const dateObject4 = new Date(milliseconds4);
   const humanDateFormat4 = dateObject4.toLocaleString("en-US", {timeZoneName: "short"}) 
   console.log(humanDateFormat4);
   document.getElementById("day4Date").innerHTML = humanDateFormat4;
  
   var iconDay4El = document.querySelector('#iconDay4');
   var jpgImg4 = document.createElement('img');
   var iconUrl4 = "https://openweathermap.org/img/w/" + data1.daily[4].weather[0].icon + ".png";
   jpgImg4.setAttribute('src', iconUrl4);
   iconDay4El.innerHTML='';
   iconDay4El.appendChild(jpgImg4);

   var v4 = (data1.daily[4].temp.day) * 9/5;
   var t4 = v4 - 459.67;
   console.log(t4);
   let t4fixed = t4.toFixed(2) 
   document.getElementById("tempDay4").innerHTML = "Temp :  " + t4fixed + " *F" ; 
   document.getElementById("windDay4").innerHTML = "Wind :  " + data1.daily[4].wind_speed + " MPH"; 
   document.getElementById("humidityDay4").innerHTML = "Humidity : " + data1.daily[4].humidity + " %" ; 

  // --- Day 5 forecast ------------------------------------------------------

   const milliseconds5 = data1.daily[5].dt * 1000;
   const dateObject5 = new Date(milliseconds5);
   const humanDateFormat5 = dateObject5.toLocaleString("en-US", {timeZoneName: "short"}) 
   console.log(humanDateFormat5);
   document.getElementById("day5Date").innerHTML = humanDateFormat5;
  
   var iconDay5El = document.querySelector('#iconDay5');
   var jpgImg5 = document.createElement('img');
   var iconUrl5 = "https://openweathermap.org/img/w/" + data1.daily[5].weather[0].icon + ".png";
   jpgImg5.setAttribute('src', iconUrl5);
   iconDay5El.innerHTML='';
   iconDay5El.appendChild(jpgImg5);

   var v5 = (data1.daily[5].temp.day) * 9/5;
   var t5 = v5 - 459.67;
   console.log(t5);
   let t5fixed = t5.toFixed(2) 
   document.getElementById("tempDay5").innerHTML = "Temp :  " + t5fixed + " *F" ; 
   document.getElementById("windDay5").innerHTML = "Wind :  " + data1.daily[5].wind_speed + " MPH"; 
   document.getElementById("humidityDay5").innerHTML = "Humidity : " + data1.daily[5].humidity + " %" ; 
   
   cityName.value="";

  
          
    }) 
    })
    })
})

}




