import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapSection = () => {
  const position: [number, number] = [37.5585, -122.2711];

  return (
    <div className="max-w-4xl mt-10">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Map</h2>
      <div className="rounded-lg overflow-hidden shadow-md">
      <MapContainer
          {...{
            center: position,
            zoom: 13,
            scrollWheelZoom: false,
            style: { height: "400px", width: "100%" }
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              This is the location of the property. <br /> San Mateo, CA.
            </Popup>
          </Marker>
        </MapContainer>
        <p>
          &copy; <a href="http://osm.org/copyright">OpenStreetMap</a>{" "}
          contributors
        </p>
      </div>
    </div>
  );
};

export default MapSection;
