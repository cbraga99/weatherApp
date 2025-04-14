export default function CurrentWeather({
    isCelsius,
    currentWeather,
    isLoading,
}) {
    console.log(currentWeather);

    return (
        <>
            {currentWeather && (
                <div className="card_container">
                    <div className="card">
                        <div className="card_column">
                            <h2>Wind</h2>
                            {isCelsius
                                ? currentWeather.wind_kph + "Km/h"
                                : currentWeather.wind_mph + "mph"}
                        </div>
                        <div className="card_column">
                            <h2>Wind Degrees</h2>
                            {currentWeather.wind_degree + "º"}
                        </div>
                        <div className="card_column">
                            <h2>Wind Direction</h2>
                            {currentWeather.wind_dir}
                        </div>
                        <div className="card_column">
                            <h2>Pressure</h2>
                            {isCelsius
                                ? currentWeather.pressure_mb + "mb"
                                : currentWeather.pressure_in + "in"}
                        </div>
                        <div className="card_column">
                            <h2>Precipitation</h2>
                            {isCelsius
                                ? currentWeather.precip_mm + "mm"
                                : currentWeather.precip_in + "in"}
                        </div>
                        <div className="card_column">
                            <h2>Humidity</h2>
                            {currentWeather.humidity}
                        </div>
                        <div className="card_column">
                            <h2>Humidity</h2>
                            {currentWeather.cloud}
                        </div>
                        <div className="card_column">
                            <h2>Feels like</h2>
                            {isCelsius
                                ? currentWeather.feelslike_c + "ºC"
                                : currentWeather.feelslike_f + "ºF"}
                        </div>
                        <div className="card_column">
                            <h2>Windchill</h2>
                            {isCelsius
                                ? currentWeather.windchill_c + "ºC"
                                : currentWeather.windchill_f + "ºF"}
                        </div>
                        <div className="card_column">
                            <h2>Heat index</h2>
                            {isCelsius
                                ? currentWeather.heatindex_c + "ºC"
                                : currentWeather.heatindex_f + "ºF"}
                        </div>
                        <div className="card_column">
                            <h2>Dew point</h2>
                            {isCelsius
                                ? currentWeather.dewpoint_c + "ºC"
                                : currentWeather.dewpoint_f + "ºF"}
                        </div>
                        <div className="card_column">
                            <h2>Visibility</h2>
                            {isCelsius
                                ? currentWeather.vis_km + "Km"
                                : currentWeather.vis_miles + "mi"}
                        </div>
                        <div className="card_column">
                            <h2>UV</h2>
                            {currentWeather.uv}
                        </div>
                        <div className="card_column">
                            <h2>Wind gust</h2>
                            {isCelsius
                                ? currentWeather.gust_kph + "Km/h"
                                : currentWeather.gust_mph + "mph"}
                        </div>
                    </div>
                </div>
            )}
            <div className="card">
                {/*currentWeather.air_quality && (
                    <div className="card_column">
                        <h2>Air quality</h2>
                        <h3>Fine Particulate Matter</h3>
                        {currentWeather.air_quality.pm2_5}
                        <h3>Particulate Matter</h3>
                        {currentWeather.air_quality.pm10}
                        <h3>Nitrogen dioxide</h3>
                        {currentWeather.air_quality.no2}
                        <h3>Ozone</h3>
                        {currentWeather.air_quality.o3}
                        <h3>Sulfur Dioxide</h3>
                        {currentWeather.air_quality.so2}
                        <h3>Carbon Dioxide</h3>
                        {currentWeather.air_quality.co}
                    </div>
                )*/}
            </div>
        </>
    );
}
