import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([-1.325, 36.865], 15); // Coordinates of Avenue Park 2, Embakasi South, Nairobi

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    L.marker([-1.325, 36.865])
      .addTo(map)
      .bindPopup('Your Company Location')
      .openPopup();

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '400px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    ></div>
  );
};

export default Map;
