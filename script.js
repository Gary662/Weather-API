document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=260046bd77baeae33d6685e481b615c4&units=metric')
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            document.getElementById('weather-info').textContent = `Temperature: ${temperature}°C, ${description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').textContent = 'Failed to fetch weather data';
        });
});
   