const weatherCodeData = new Array();

class WeatherCode {
  constructor(weatherCode, description, imageSrc) {
    this.weatherCode = weatherCode;
    this.description = description;
    this.imageSrc = imageSrc;
  }
}

let fillWeatherData = () => {
  weatherCodeData.push(
    new WeatherCode(0, "Clear sky", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(1, "Mainly clear", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(2, "Partly cloudy", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(3, "Overcast", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(45, "Fog", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(48, "Depositing rime fog", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(51, "Light drizzle", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(53, "Moderate drizzle", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(55, "Dense drizzle", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(
      56,
      "Light freezing drizzle",
      "/src/weatherIcons/cloudy.svg"
    )
  );
  weatherCodeData.push(
    new WeatherCode(
      57,
      "Dense freezing drizzle",
      "/src/weatherIcons/cloudy.svg"
    )
  );
  weatherCodeData.push(
    new WeatherCode(61, "Slight rain", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(63, "Moderate rain", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(65, "Heavy rain", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(66, "Light freezing rain", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(67, "Heavy freezing rain", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(71, "Slight snowfall", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(73, "Moderate snowfall", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(75, "Heavy snowfall", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(77, "Snow grains", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(80, "Slight rain showers", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(81, "Moderate rain showers", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(82, "Violent rain showers", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(85, "Slight snow showers", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(86, "Heavy snow showers", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(95, "Thunderstorm", "/src/weatherIcons/cloudy.svg")
  );
  weatherCodeData.push(
    new WeatherCode(
      96,
      "Thunderstorm with slight hail",
      "/src/weatherIcons/cloudy.svg"
    )
  );
  weatherCodeData.push(
    new WeatherCode(
      99,
      "Thunderstorm with heavy hail",
      "/src/weatherIcons/cloudy.svg"
    )
  );
};

fillWeatherData();

let findWeatherPicture = (weatherCode) => {
  for (const element of weatherCodeData) {
    if (element.weatherCode == weatherCode) {
      return element;
    }
  }
};

let weatherCodeTypes = () => {
  const weatherCodes = new Array();
  for (const element of weatherCodeData) {
    weatherCodes.push(element.description);
  }
  console.log(weatherCodes);
};

weatherCodeTypes();

class DailyWeather {
  constructor(date, day) {
    this.date = date;
    this.day = day;
    this.data = new Array();
  }

  addData(weatherCode, time, temperature, precipitation) {
    this.data.push(
      new DailyData(weatherCode, time, temperature, precipitation)
    );
  }
}

class DailyData {
  constructor(weatherCode, time, temperature, precipitation) {
    this.weatherCode = weatherCode;
    this.time = time;
    this.temperature = temperature;
    this.precipitation = precipitation;
  }
}
