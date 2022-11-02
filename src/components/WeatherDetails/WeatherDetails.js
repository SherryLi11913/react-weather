import './WeatherDetails.css';

export default function WeatherDetails({weather}) {
    return (
        <>
        {
            weather ?
            <div className="weather-details">
                <h2 className="location">
                    {`${weather.city_name}, ${weather.country_code}`}
                </h2>

                <h1 className="temperature">
                    <span className="temperature-num">{Math.round(weather.temp)}</span>°C
                </h1>

                <h3 className="weather">
                    {weather.weather.description}
                </h3>
            </div>
            :
            <></>
        }
        </>
    );
};
