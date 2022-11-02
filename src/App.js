import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

function App() {
  const [city, setCity] = React.useState('');
  const [weather, setWeather] = React.useState(null);

  const searchWeather = (latitude = null, longitude = null) => {
    const api = 'https://api.weatherbit.io/v2.0/current?';
    const apiKey = '982e0dc2af22447999da0f9b4aac638e';

    if (latitude && longitude) {
      fetch(`${api}lat=${latitude}&lon=${longitude}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          setWeather(data.data[0]);
        });
    } else {
      fetch(`${api}city=${city}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          setWeather(data.data[0]);
        });
    }
  }

  React.useEffect(() => {
    if (city) {
      searchWeather();
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            searchWeather(position.coords.latitude, position.coords.longitude);
          },
          () => {
            setCity('Beijing');
          }
        );
      } else {
        setCity('Beijing');
      }
    }
  }, [city]);

  const dayNight = () => {
    const currentHour = new Date().getHours();

    return (currentHour < 6 || currentHour > 18) ? 'night' : 'day';
  };

  return (
    <div className={`app ${dayNight()}`}>
      <SearchBar
        searchCity={input => setCity(input)}
      />

      <WeatherDetails
        weather={weather}
      />
    </div>
  );
}

export default App;
