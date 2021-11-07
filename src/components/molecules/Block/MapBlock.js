import React from 'react';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import { Link } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: "var(--width)",
  height: "400px",
  marginTop: "1rem",
  marginBottom: "1rem"
};

const center = {
  lat: 35.70025,
  lng: 127.92612
};

const position = {
  lat: 35.980497,
  lng: 128.072377
}

const MapBlock = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCavBuLTQ1xBEKmO2r0H0FCDdhh1KUpmlk"
  })
  
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="div-map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6.3}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker 
        position={position}/>
      </GoogleMap>
      <Link className="linkComponent" to="/rg/nhs">
        <RoundRectangle textAlign="center" btnText="11개의 시설 보러가기"/>
      </Link>
    </div>
  ) : <></>
}

export default MapBlock;