var cityName = document.querySelector('#cityname').value;
var cityContainerEl = document.querySelector("#citylistContainer");
var cityIdCounter = 0;





function myFunction(){

    
   


// Store it in local storage and add City name in the list as a button ( so upon clicking it it will fetch data of that city ) 

    localStorage.setItem ("city", cityName);

    var citylistEl = document.createElement("li");
    citylistEl.className = "citys";
    citylistEl.setAttribute("city-id", cityIdCounter);
    citylistEl.textContent = cityName;
    cityContainerEl.appendChild.citylistEl();

    cityIdCounter++; 

    var data0 = localStorage.getItem("city");
    console.log(data0);
  
  
    //document.getElementById("task0").innerHTML = data0;

    citys.appendChild(data0);
     





}

// city data to pull from oneweather app and presnet to container     

//var cityWeatherEl = fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=9d0a91c9414180869a1b366b5eca06bd');

//console.log(cityWeatherEl);

//cityWeatherEl.then(function(response) {
//console.log(response);
//return response.json();  })

//.then(function(response) {
//console.log(response.data);

//preventDefault();


//})

