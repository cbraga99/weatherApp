import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function Map({latitude, longitude}) {
  return (
    <>
    {location && 
    <MapContainer center={[{latitude},{longitude}]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          This is a popup
        </Popup>
      </Marker>
    </MapContainer>
     }
     </>
  );
}