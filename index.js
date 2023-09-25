const ApiKey = "db0af232812337d161ee59e6e99b7916";
const weatherTableBody = document.getElementById("weatherTableBody");
async function getWeather() {
    let Cityname = document.getElementById("City").value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Cityname}&appid=${ApiKey}`)
    .then((result)=> {
        const { name, weather, main, visibility, timezone } = result.data;
        const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${weather[0].main}</td>
            <td>${main.temp}°C</td>
            <td>${visibility}</td>
            <td>${timezone}</td>
            <td><img src="${iconUrl}" alt="${weather[0].description}" width="50"></td>
        `;
        weatherTableBody.appendChild(newRow);
    })
    .catch((error) => {
        console.error(error);
    });
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Cityname}&appid=${ApiKey}`)
    .then((result) => {
      // ... Your existing code ...

      // Determine the weather condition and set the background accordingly
      const weatherCondition = weather[0].main.toLowerCase();
      const backgroundElement = document.body;
      backgroundElement.classList.remove(
        'rainy-background',
        'sunny-background',
        'cloudy-background',
        'default-background'
      );

      switch (weatherCondition) {
        case 'rain':
        case 'drizzle':
        case 'thunderstorm':
          backgroundElement.classList.add('rainy-background');
          break;
        case 'clear':
          backgroundElement.classList.add('sunny-background');
          break;
        case 'clouds':
          backgroundElement.classList.add('cloudy-background');
          break;
        default:
          backgroundElement.classList.add('default-background');
          break;
      }

      // ... Your existing code ...
    })
    .catch((error) => {
      console.error(error);
    });
}



//------------------------------------------------------------------------------


// const ApiKey = "db0af232812337d161ee59e6e99b7916";
// const cities = ["London", "New York", "Tokyo", "Paris", "Sydney"];
// const weatherTableBody = document.getElementById("weatherTableBody");
// async function getWeather() {
//     weatherTableBody.innerHTML = ""; // Clear existing table data
//     for (const city of cities) {
//         try {
//             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`);
//             const weatherData = response.data;
//             const row = document.createElement("tr");
//             row.innerHTML = `
//                 <td>${city}</td>
//                 <td>${weatherData.weather[0].description}</td>
//                 <td>${(weatherData.main.temp - 273.15).toFixed(2)}°C</td>
//                 <td>${(weatherData.visibility / 1000).toFixed(2)} km</td>
//                 <td>${weatherData.timezone}</td>
//                 <td><img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="${weatherData.weather[0].description}" /></td>
//             `;
//             weatherTableBody.appendChild(row);
//         } catch (error) {
//             console.log(`Error fetching weather data for ${city}:`, error);
//         }
//     }
// }


//------------------------------------------------------------------------------
//5 CITIES WORK :


// const ApiKey = "db0af232812337d161ee59e6e99b7916";
// const cities = ["London", "New York", "Tokyo", "Sydney", "Paris"];
// async function getWeather() {
//     const weatherTableBody = document.getElementById("weatherTableBody");
//     weatherTableBody.innerHTML = ""; // Clear previous table data
//     for (const city of cities) {
//         try {
//             const response = await fetchWeatherData(city);
//             const weatherData = response.weather[0].description;
//             createWeatherTableRow(weatherTableBody, city, weatherData);
//         } catch (error) {
//             console.error(`Error fetching weather data for ${city}: ${error.message}`);
//         }
//     }
// }
// async function fetchWeatherData(city) {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`);
//     if (!response.ok) {
//         throw new Error(`Failed to fetch weather data for ${city}`);
//     }
//     return response.json();
// }
// function createWeatherTableRow(tableBody, cityName, weather) {
//     const row = document.createElement("tr");
//     const cityCell = document.createElement("td");
//     const weatherCell = document.createElement("td");
//     cityCell.textContent = cityName;
//     weatherCell.textContent = weather;
//     row.appendChild(cityCell);
//     row.appendChild(weatherCell);
//     tableBody.appendChild(row);
// }


//------------------------------------------------------------------------------
//CLASS ROOM WORK :


// const ApiKey = "db0af232812337d161ee59e6e99b7916"
// const witherdata = document.getElementById("WitherData");
// async function getwither(){
//     let Cityname = document.getElementById("City").value;
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Cityname}&appid=${ApiKey}`)
//     .then((result)=> {
//         console.log(result.data)
//         // witherdata.innerHTML = result.data.main.temp
//     })
// }