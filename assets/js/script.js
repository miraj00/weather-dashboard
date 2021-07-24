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

    weatherdataFetch();
    
// add current City -------------------------------------------- 
var x = document.querySelector('#cityname').value;
console.log(x);
b = moment().format('L');
var c = x + "   (  " + b + "  )"; 
document.getElementById("currentCity&Dt").innerHTML = c + data.list[0].weather.icon ;

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
//-------------------------------fetch data ----------------------------------------------
function weatherdataFetch() {
    var x = document.querySelector('#cityname').value;
    console.log(x);
    
   var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + x + "&appid=9d0a91c9414180869a1b366b5eca06bd";

   console.log(apiUrl);

  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);

      
      document.getElementById("tempNow").innerHTML = "Temp :  " + data.list[0].main.temp + "*F" ; 
      document.getElementById("windNow").innerHTML = "Wind :  " + data.list[0].wind.speed + " MPH" ; 
      document.getElementById("humidityNow").innerHTML = "Humidity : " + data.list[0].main.humidity + "%" ; 
   //   document.getElementById("uvIndexNow").innerHTML = data.list[0].main.temp ; 

    var iconDay1El = document.querySelector('#iconDay1');
    var jpgImg = document.createElement('img');
    var iconUrl = "http://openweathermap.org/img/w/" + data.list[1].weather.icon + ".png";
    jpgImg.setAttribute('src', iconUrl);
    iconDay1El.appendChild(jpgImg);

   
     
      document.getElementById("tempDay1").innerHTML = "Temp :  " + data.list[1].main.temp + "*F" ; 
      document.getElementById("windDay1").innerHTML = "Wind :  " + data.list[1].wind.speed + "MPH"; 
      document.getElementById("humidityDay1").innerHTML = "Humidity : " + data.list[1].main.humidity + "%" ; 


   


           }) 
       })
}


