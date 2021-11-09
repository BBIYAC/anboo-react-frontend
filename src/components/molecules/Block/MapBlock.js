import React from 'react';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, MarkerClusterer ,Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: "var(--width)",
  height: "400px",
  marginTop: "1rem",
  marginBottom: "1rem",
};


const center = {lat: 36, lng: 127.85,};
const zoom = 7;
// const restriction = {
//   restriction: {
//     latLngBounds: {
//       north: -10,
//       south: -40,
//       east: 160,
//       west: 100,
//     },
//   },
// }

const locations = [
  { lat:36.334595 , lng:127.438787 },
  { lat:36.316669 , lng:127.440620 },
  { lat:36.323326 , lng:127.438044 },
  { lat:36.317351 , lng:127.457665 },
  { lat:36.320442 , lng:127.457410 },
  { lat:36.332797 , lng:127.461245 },
  { lat:36.329219 , lng:127.445475 },
  { lat:36.338072 , lng:127.449980 },
  { lat:36.347018 , lng:127.441416 },
  { lat:36.349064 , lng:127.447385 },
  { lat:36.332381 , lng:127.416782 },
  { lat:36.333578 , lng:127.409121 },
  { lat:36.341977 , lng:127.408979 },
  { lat:36.322732 , lng:127.424917 },
  { lat:36.317935 , lng:127.435744 },
  { lat:36.305898 , lng:127.438447 },
  { lat:36.310560 , lng:127.422022 },
  { lat:36.311480 , lng:127.431514 },
  { lat:36.329899 , lng:127.406854 },
  { lat:36.325204 , lng:127.405197 },
  { lat:36.36596 ,  lng:127.412043  },
  { lat:36.376916 , lng:127.420889  },
  { lat:36.392524 , lng:127.425754  },
  { lat:36.397361 , lng:127.419859  },
  { lat:36.405908 , lng:127.425046  },
  { lat:36.360116 , lng:127.441797  },
  { lat:36.368124 , lng:127.43065  },  
  { lat:36.361593 , lng:127.427191  },
  { lat:36.356956 , lng:127.449963  },
  { lat:36.448426 , lng:127.425622  },
  { lat:36.299828 , lng:127.316406  },
  { lat:36.353119 , lng:127.338904  },
  { lat:36.365372 , lng:127.333373  },
  { lat:36.368271 , lng:127.318449  },  
  { lat:36.389472 , lng:127.320750  },
  { lat:36.386202 , lng:127.297594  },
  { lat:36.384093 , lng:127.350222  },
  { lat:36.402787 , lng:127.398786  },
  { lat:36.440463 , lng:127.383784  },
  { lat:36.423694 , lng:127.389537  },
]

const imageOptions = {
  imagePath:
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
}

const mapDefaultOptions = {
  disableDefaultUI: true,
  zoom,
  center,
  minZoom: zoom - 3,
  maxZoom: zoom + 3,
  restriction: {
    latLngBounds: {
      north: 45,
      south: 25,
      east: 140,
      west: 115,
    },
  },
}

const createKey = (location) => {
  return location.lat + location.lng
}

const MapBlock = () => {
  return (
  <LoadScript
  googleMapsApiKey="AIzaSyC526zoNUjyiZlFOXmIy7_KGgaxcj7ecIo">
      <GoogleMap 
      id='marker-example' 
      mapContainerStyle={mapContainerStyle} 
      options={mapDefaultOptions}
      >
        <MarkerClusterer 
        options={imageOptions}
        maxZoom="15">
          {(clusterer) =>
            locations.map((location) => (
              <Marker 
              key={createKey(location)} 
              position={location} 
              clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
      <Link className="linkComponent" to="/rg/nhs">
        <RoundRectangle textAlign="center" btnText="11개의 시설 보러가기"/>
      </Link>
  </LoadScript>
  )
}

export default MapBlock;