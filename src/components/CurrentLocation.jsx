import Map from "./Map";

export default function CurrentLocation({ location }) {
    console.log(location);

    return (
        <>
            <div className="card_container">
                <div className="card">
                    <div className="card_column">
                        {location && (
                            <>
                                <ul className="location_items">
                                    <li className="location_item">
                                        <h3>City</h3>
                                        <p>{location.name}</p>
                                    </li>
                                    <li className="location_item">
                                        <h3>Region</h3>
                                        <p>{location.region}</p>
                                    </li>
                                    <li className="location_item">
                                        <h3>Country</h3>
                                        <p>{location.country}</p>
                                    </li>
                                    <li className="location_item">
                                        <h3>Coordinates</h3>
                                        <p>
                                            {location.lat}, {location.lon}
                                        </p>
                                    </li>
                                </ul>

                                <Map latitude={location.lat} longitude={location.lon} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
