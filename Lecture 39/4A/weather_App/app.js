//AJAX: Asynchrnous javascript and XML(extensible markup language).
//It is a web technique using which we send request to the server without refreshing the current web page.
//Use: Inside single page application we use AJAX like react built single page application which changes content of the page not the page.
//client server modal;
//In client server architecture:client kuch request send krte hai server ko.Server send us back the data that cleient has requested.
//another modal AJAX Modal:
//there is a client and server. Inbetween them there is a layer of javascript.Client ab directly request ni send kregi woh iss layer ko request send krega aur ye layer ye request server ko degi server fir iska response javascript ki iss layer ko send krega and then ye layer client ko ye data send kr dega. This layer of javscript is AJAX.And this layer is responsible for all content dilivery using DOM.

//Client server modal mai html,css and Js milta hai hme as a response but in Ajax modal we get data woh hmpe hota hai ki hm iss data ko kaise represent krna chahte hai

//AJAX modal mai jo data mil rha hai uske 2 format hai JSON format and XML format.Current time we use JSON data, XMl we dont use.

const apikey = "3f53940c4bc5b611f1ddf33b973fe9f7";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(" .search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//This will have all the data for our page:
async function weatherChecker(city) {
  const response = await fetch(apiURL + city + `&appid=${apikey}`);
  var data = await response.json();

  //complete step 1 then move for below things:
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  weatherChecker(searchBox.value);
});
//1:to check data on console call function
