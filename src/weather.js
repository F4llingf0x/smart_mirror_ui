const urlForMenu =
  "https://api.open-meteo.com/v1/forecast?latitude=47.47&longitude=19.07&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max,windspeed_10m_max&timezone=Europe%2FBerlin&forecast_days=1";
const urlForContent =
  "https://api.open-meteo.com/v1/forecast?latitude=47.47&longitude=19.07&hourly=temperature_2m,precipitation,weathercode&timezone=Europe%2FBerlin";

const weatherElement = document.getElementById("weather");
const dailyWeathers = new Array();

async function getWeatherInfo(url) {
  const response = await fetch(url);
  return await response.json();
}

getWeatherInfo(urlForMenu).then((response) => {
  appendText(
    weatherElement,
    response.daily.apparent_temperature_min +
      " / " +
      response.daily.apparent_temperature_max +
      " °C"
  );
  appendText(weatherElement, response.daily.windspeed_10m_max + " km/h");
  /*
  let text = "Max temperature: \n";
  text += "\t" + response.daily.apparent_temperature_max;

  childElement.innerHTML = text;
  weatherElement.children[1].innerHTML = text;
  */
});

let appendText = (htmlElement, text) => {
  let children = htmlElement.appendChild(document.createElement("p"));
  children.innerHTML = text;
};

function weatherContent(contentDiv) {
  contentDiv.classList.add("weather-content");
  let text = document.createElement("div");

  let day = document.createElement("div");
  day.classList.add("day");
  let text1 = document.createElement("p");
  let text2 = document.createElement("p");
  text1.innerHTML = "Text1";
  text2.innerHTML = "Text2";
  day.innerHTML = dailyWeathers[0].day;
  text.appendChild(text1);
  text.appendChild(text2);
  contentDiv.appendChild(day);
  contentDiv.appendChild(text);

  dailyWeathers[0].data.forEach(createWeatherDayDiv);

  function createWeatherDayDiv(value, index) {
    var delayInMilliseconds = 1000;

    let dayDiv = document.createElement("div");
    // setTimeout(function () {
    let weatherCode = document.createElement("img");
    let temperature = document.createElement("p");
    let precipitation = document.createElement("p");
    let time = document.createElement("p");
    let weatherImageData = findWeatherPicture(value.weatherCode);
    console.log("weatherImageData");
    console.log(weatherImageData);
    weatherCode.src = weatherImageData.imageSrc;
    weatherCode.alt = weatherImageData.description;
    weatherCode.classList.add("mass-icon");

    temperature.innerHTML = value.temperature;
    precipitation.innerHTML = value.precipitation;
    time.innerHTML = value.time;

    dayDiv.appendChild(weatherCode);
    dayDiv.appendChild(temperature);
    dayDiv.appendChild(precipitation);
    dayDiv.appendChild(time);
    // }, delayInMilliseconds * index);
    contentDiv.appendChild(dayDiv);
  }
}

getWeatherInfo(urlForContent).then((response) => {
  response.hourly.time.forEach(setWeaterData);

  function setWeaterData(value, index) {
    let currentDate = new Date(value);
    let lastDailyWeather = dailyWeathers[dailyWeathers.length - 1];
    if (!lastDailyWeather || lastDailyWeather.date != currentDate.getDate()) {
      if (dailyWeathers.length == 0) {
        dailyWeathers.push(new DailyWeather(currentDate.getDate(), "Today"));
      } else {
        dailyWeathers.push(
          new DailyWeather(
            currentDate.getDate(),
            transformDay(currentDate.getDay())
          )
        );
      }
      lastDailyWeather = dailyWeathers[dailyWeathers.length - 1];
    }
    lastDailyWeather.addData(
      response.hourly.weathercode[index],
      currentDate.getHours(),
      parseInt(response.hourly.temperature_2m[index]),
      response.hourly.precipitation[index]
    );
  }
  //console.log(dailyWeathers);
});
