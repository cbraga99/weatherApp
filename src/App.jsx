import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import CurrentLocation from "./components/CurrentLocation";
import CurrentWeather from "./components/CurrentWeather";
import { useFetch } from "./hooks/useFetch";

function App() {
    const [tempUnitIsCelsius, setTempUnitIsCelsius] = useState(true);
    const [city, setCity] = useState("Braga, portugal");
    // const [weatherInfo, setWeatherInfo] = useState(null);
    function handleTempUnitClick() {
        setTempUnitIsCelsius((prevValue) => {
            return !prevValue;
        });
    }

    const {
        data: weatherInfo,
        setData: setWeatherInfo,
        isPending,
        error,
    } = useFetch(
        `https://api.weatherapi.com/v1/current.json?key=8df03b6fa6834f65904103926250604&q=${city}&aqi=no`
    );

    const handleCity = (data) => {
        console.log(data);
        setCity(data);
    };

    return (
        <>
            <div className="app-container">
                <div className="topbar">
                    <div className="card_container">
                        <div className="card">
                            <Input inputValueReturn={handleCity} />
                            <div className="flex"></div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={tempUnitIsCelsius}
                                    onChange={handleTempUnitClick}
                                />
                                Metric<div class="slider"></div>Imperial
                            </label>
                        </div>
                    </div>
                </div>
                <div className="city-details">
                    <CurrentLocation
                        handleCity={handleCity}
                        location={weatherInfo && weatherInfo.location}
                    />
                </div>
                <div className="weather-details">
                    <CurrentWeather
                        isCelsius={tempUnitIsCelsius}
                        isLoading={isPending}
                        currentWeather={weatherInfo && weatherInfo.current}
                    />
                    <div className="read-the-docs">
                        <div>{JSON.stringify(weatherInfo, null, 2)}</div>;
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
