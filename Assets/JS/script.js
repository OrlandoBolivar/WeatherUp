var weatherAPIkey = '06eedb545ff57d568ddd4efe29c6ce14';
var weatherAPIParameter =  '&appid=06eedb545ff57d568ddd4efe29c6ce14';
var baseURLWeather = 'https://api.openweathermap.org/data/2.5/forecast?';

var sampleRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=06eedb545ff57d568ddd4efe29c6ce14`
// lat/lon = coordenates


fetch(sampleRequestUrl)
  .then (function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data);

  });


  