document.addEventListener('DOMContentLoaded', function () {
  const cityList = document.getElementById('cityList');

  const cities = [
    { name: 'Hyderabad', value: '261159' },
    { name: 'Karachi', value: '261158' },
    { name: 'Lahore', value: '260622' },
    { name: 'Islamabad', value: '258278' },
    { name: 'Faisalabad', value: '260622' },
    { name: 'Rawalpindi', value: '258278' },
    { name: 'Multan', value: '260622' },
    { name: 'Peshawar', value: '259307' },
    { name: 'Quetta', value: '260624' },
    { name: 'Sialkot', value: '259338' },
  ];

  cities.forEach((city) => {
    let option = document.createElement('option');
    option.value = city.name;
    option.setAttribute('data-key', city.value);
    cityList.appendChild(option);
  });
});

function getWeather() {
  const inputElement = document.getElementById('cityKeyInput');
  const selectedCity = inputElement.value;
  const apiKey = 'wioQWOcBNCCw1XLw49fxdlYyLmDGLulG';

  const selectedOption = [
    ...document.querySelectorAll('#cityList option'),
  ].find((opt) => opt.value === selectedCity);

  if (!selectedOption) {
    document.querySelector('.weather-info').innerText = 'City not found!';
    return;
  }

  const cityKey = selectedOption.getAttribute('data-key');
  const url = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.length > 0) {
        const weatherText = data[0].WeatherText;
        const weatherEmoji = getWeatherEmoji(weatherText);

        document.querySelector('.weather-info').innerHTML = `
                  <p>🌍 <b>Weather:</b> ${weatherText} ${weatherEmoji}</p>
              `;
      } else {
        document.querySelector('.weather-info').innerText =
          'Weather not available';
      }
    })
    .catch((error) => {
      console.error('Error fetching weather:', error);
      document.querySelector('.weather-info').innerText = 'Error fetching data';
    });
}

function getWeatherEmoji(condition) {
  const weatherEmojis = {
    Sunny: '☀️',
    'Mostly Sunny': '🌤️',
    'Partly Cloudy': '⛅',
    Cloudy: '☁️',
    Overcast: '🌥️',
    Rain: '🌧️',
    Showers: '🌦️',
    Thunderstorms: '⛈️',
    Snow: '❄️',
    Fog: '🌫️',
    Windy: '💨',
    Clear: '🌙',
  };

  return weatherEmojis[condition] || '❔';
}
