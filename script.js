const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city"+city;
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
  }
};

const getWeather = (city) => {

  cityName.innerHTML=city



  fetch(url, options)
    .then(response => response.json())
    .then((response) => {


      console.log(response)


      cloud_pct.innerHTML = response.clude_pct
      temp.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset



    })
    .catch(err => console.error(err));
}

Submit.addEventListner("click", (e) => {
  e.preventDefault()
  getWeather(City.value)
})

getWeather("delhi")