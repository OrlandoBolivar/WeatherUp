var searchBox= document.querySelector("#search");
var submitBtn = document.querySelector('#submitbutton')
var weatherAPIkey = '06eedb545ff57d568ddd4efe29c6ce14';
var weatherAPIParameter =  '&appid=06eedb545ff57d568ddd4efe29c6ce14';
var baseURLWeather = 'https://api.openweathermap.org/data/2.5/forecast?';

var sampleRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=06eedb545ff57d568ddd4efe29c6ce14`



function getCoordinates (city) {

// lat/lon = coordenates
var weatherURLSample = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherAPIkey}`
fetch(weatherURLSample)
  .then (function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data);


    var latCity = data.coord.lat;
    var lonCity = data.coord.lon;

    // console.log(latCity)

    getResults(latCity, lonCity)

  });
}


function setQuery(event) {
  console.log('submit clicked')
  event.preventDefault();
  var city = searchBox.value;

  getCoordinates(city)
}

function getResults(latCity, lonCity) {
    var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latCity}&lon=${lonCity}&units=metric&appid=${weatherAPIkey}` ;
    fetch(url).then(weather => {
        return weather.json();
    })
    //.then(displayResults)
    .then(function(data){
      console.log("Five Day: ", data)



      for (var i=1; i < 6; i++) {
        console.log(data.list[i].main.temp)

        let cardEl = document.createElement('div')
        let pEl = document.createElement('p');

        let imgEl = document.createElement('img')
        imgEl.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[i].weather.icon}.png`) //fix dot notation






      }




    })
    .catch((e) => console.log(e.toString()))
}



submitBtn.addEventListener("click", setQuery);

