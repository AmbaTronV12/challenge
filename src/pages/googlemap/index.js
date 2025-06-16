import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -6.2088, // Ubah sesuai lokasi gym Anda
  lng: 106.8457
};

function GoogleMapComponent() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} title="Zenetics Gym" />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;