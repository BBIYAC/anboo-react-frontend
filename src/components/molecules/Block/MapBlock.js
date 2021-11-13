import React, {useState} from 'react';
import RoundRectangle from '../../atoms/Button/RoundRectangle';
import { Link } from 'react-router-dom';
import { 
  GoogleMap, 
  LoadScript, 
  MarkerClusterer ,
  Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: "var(--width)",
  height: "400px",
  marginTop: "1rem",
  marginBottom: "1rem",
};

const locations = [
  // 충청남도
  { lat: 36.788453, lng: 127.212553 },
  { lat: 36.737690, lng: 127.122322 },
  { lat: 36.676638, lng: 127.092652 },
  { lat: 36.835070, lng: 127.271807 },
  { lat: 36.732160, lng: 127.236550 },
  { lat: 36.725211, lng: 127.285798 },
  { lat: 36.795383, lng: 127.312925 },
  { lat: 36.781067, lng: 127.367142 },
  { lat: 36.800143, lng: 127.152538 },
  { lat: 36.811061, lng: 127.150646 },
  { lat: 36.932113, lng: 127.128314 },
  { lat: 36.873848, lng: 127.195144 },
  { lat: 36.885332, lng: 127.137866 },
  { lat: 36.910502, lng: 127.225709 },
  { lat: 36.815052, lng: 127.142947 },
  { lat: 36.823672, lng: 127.137381 },
  { lat: 36.804039, lng: 127.130496 },
  { lat: 36.796272, lng: 127.123178 },
  { lat: 36.802956, lng: 127.119146 },
  { lat: 36.827408, lng: 127.116085 },
  { lat: 36.596512, lng: 126.968372 },
  { lat: 36.374721, lng: 127.069625 },
  { lat: 36.326204, lng: 127.029416 },
  { lat: 36.368364, lng: 127.157824 },
  { lat: 36.384003, lng: 127.238708 },
  { lat: 36.544229, lng: 127.159371 },
  { lat: 36.599349, lng: 127.098129 },
  { lat: 36.474711, lng: 127.058198 },
  { lat: 36.538861, lng: 127.033678 },
  { lat: 36.506062, lng: 126.945863 },
  { lat: 36.242946, lng: 126.589147 },
  { lat: 36.410464, lng: 126.579813 },
  { lat: 36.384686, lng: 126.444133 },
  { lat: 36.384686, lng: 126.444133 },
  { lat: 36.384686, lng: 126.444133 },
  { lat: 36.484118, lng: 126.527929 },
  { lat: 36.450960, lng: 126.606348 },
  { lat: 36.403403, lng: 126.659639 },
  { lat: 36.296534, lng: 126.578720 },
  { lat: 36.203052, lng: 126.621754 },
  { lat: 36.821760, lng: 126.982215 },
  { lat: 36.754095, lng: 127.068357 },
  { lat: 36.703504, lng: 126.994174 },
  { lat: 36.809157, lng: 127.068452 },
  { lat: 36.858061, lng: 127.047785 },
  { lat: 36.910915, lng: 127.039072 },
  { lat: 36.885130, lng: 126.962584 },
  { lat: 36.859881, lng: 126.885053 },
  { lat: 36.793145, lng: 126.869136 },
  { lat: 36.740800, lng: 126.904044 },
  { lat: 36.965514, lng: 126.420713 },
  { lat: 36.748634, lng: 126.417511 },
  { lat: 36.680412, lng: 126.396020 },
  { lat: 36.817959, lng: 126.367163 },
  { lat: 36.875960, lng: 126.429917 },
  { lat: 36.834063, lng: 126.460491 },
  { lat: 36.796304, lng: 126.516194 },
  { lat: 36.778096, lng: 126.592853 },
  { lat: 36.713857, lng: 126.539898 },
  { lat: 36.666397, lng: 126.511701 },
  { lat: 36.152662, lng: 127.018313 },
  { lat: 36.110012, lng: 127.103090 },
  { lat: 36.199521, lng: 127.027647 },
  { lat: 36.241860, lng: 127.083306 },
  { lat: 36.288159, lng: 127.106265 },
  { lat: 36.292047, lng: 127.164211 },
  { lat: 36.206100, lng: 127.144353 },
  { lat: 36.229586, lng: 127.199004 },
  { lat: 36.188603, lng: 127.286977 },
  { lat: 36.138562, lng: 127.233864 },
  { lat: 36.793090, lng: 126.774369 },
  { lat: 36.926085, lng: 126.738920 },
  { lat: 36.942712, lng: 126.577202 },
  { lat: 37.006865, lng: 126.542683 },
  { lat: 36.914220, lng: 126.514642 },
  { lat: 36.859247, lng: 126.565474 },
  { lat: 36.814892, lng: 126.660265 },
  { lat: 36.844925, lng: 126.708221 },
  { lat: 36.829603, lng: 126.807954 },
  { lat: 36.883934, lng: 126.785954 },
  { lat: 36.095856, lng: 127.471906 },
  { lat: 36.136234, lng: 127.465958 },
  { lat: 36.129101, lng: 127.565385 },
  { lat: 36.059318, lng: 127.578867 },
  { lat: 36.181533, lng: 127.542394 },
  { lat: 36.028567, lng: 127.508206 },
  { lat: 36.049566, lng: 127.430495 },
  { lat: 36.140788, lng: 127.375146 },
  { lat: 36.200835, lng: 127.397154 },
  { lat: 36.204572, lng: 127.491616 },
  { lat: 36.286247, lng: 126.947781 },
  { lat: 36.285285, lng: 126.875751 },
  { lat: 36.328150, lng: 126.817198 },
  { lat: 36.321961, lng: 126.721205 },
  { lat: 36.279870, lng: 126.762663 },
  { lat: 36.253040, lng: 126.816940 },
  { lat: 36.229893, lng: 126.761315 },
  { lat: 36.199200, lng: 126.729776 },
  { lat: 36.212872, lng: 126.806824 },
  { lat: 36.173355, lng: 126.826154 },
  { lat: 36.020084, lng: 126.687328 },
  { lat: 36.085452, lng: 126.701530 },
  { lat: 36.048963, lng: 126.691742 },
  { lat: 36.051364, lng: 126.786371 },
  { lat: 36.078903, lng: 126.759702 },
  { lat: 36.087314, lng: 126.826146 },
  { lat: 36.136714, lng: 126.790280 },
  { lat: 36.117672, lng: 126.753384 },
  { lat: 36.151193, lng: 126.738396 },
  { lat: 36.154423, lng: 126.680147 },
  { lat: 36.448819, lng: 126.790170 },
  { lat: 36.527482, lng: 126.853966 },
  { lat: 36.447188, lng: 126.859677 },
  { lat: 36.423615, lng: 126.937121 },
  { lat: 36.413465, lng: 126.994079 },
  { lat: 36.349094, lng: 126.948340 },
  { lat: 36.365446, lng: 126.884137 },
  { lat: 36.391422, lng: 126.771587 },
  { lat: 36.442975, lng: 126.715563 },
  { lat: 36.498732, lng: 126.781793 },
  { lat: 36.593042, lng: 126.662736 },
  { lat: 36.508655, lng: 126.638558 },
  { lat: 36.641407, lng: 126.685405 },
  { lat: 36.608121, lng: 126.730491 },
  { lat: 36.556711, lng: 126.704669 },
  { lat: 36.502439, lng: 126.708476 },
  { lat: 36.530631, lng: 126.587925 },
  { lat: 36.550166, lng: 126.547998 },
  { lat: 36.574393, lng: 126.493158 },
  { lat: 36.618534, lng: 126.547880 },
  { lat: 36.703743, lng: 126.855025 },
  { lat: 36.691336, lng: 126.714790 },
  { lat: 36.666681, lng: 126.917926 },
  { lat: 36.602561, lng: 126.879714 },
  { lat: 36.563826, lng: 126.793596 },
  { lat: 36.633042, lng: 126.821242 },
  { lat: 36.645900, lng: 126.774659 },
  { lat: 36.677882, lng: 126.626867 },
  { lat: 36.744407, lng: 126.667583 },
  { lat: 36.755918, lng: 126.723781 },
  { lat: 36.273940, lng: 127.252458 },
  { lat: 36.268410, lng: 127.271270 },
  { lat: 36.257487, lng: 127.277216 },
  { lat: 36.247627, lng: 127.261923 },
  { lat: 36.254741, lng: 127.252603 },
  { lat: 36.287900, lng: 127.238940 },
  { lat: 36.273192, lng: 127.234842 },
  { lat: 36.265006, lng: 127.226100 },
  { lat: 36.267457, lng: 127.212147 },
  { lat: 36.284251, lng: 127.219283 },
  { lat: 36.753010, lng: 126.301817 },
  { lat: 36.752777, lng: 126.295770 },
  { lat: 36.755195, lng: 126.279862 },
  { lat: 36.731201, lng: 126.287928 },
  { lat: 36.720152, lng: 126.305238 },
  { lat: 36.730247, lng: 126.317856 },
  { lat: 36.752117, lng: 126.324970 },
  { lat: 36.768574, lng: 126.322627 },
  { lat: 36.769573, lng: 126.343085 },
  { lat: 36.797616, lng: 126.334630 },

  // 대전광역시
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

const center = {lat: 36.481275, lng: 128.098754}
const zoom = 6
const restriction = {
  latLngBounds: {
    north: 45,
    south: 25,
    east: 140,
    west: 116,
  },
}

const mapDefaultOptions = {
  disableDefaultUI: true,
  zoom,
  center,
  minZoom: zoom - 2,
  maxZoom: zoom + 14,
  restriction,
}

const createKey = (location) => {
  return location.lat + location.lng
}

const MapBlock = () => {
  const [latitude, setLat] = useState(null);
  const [longitude, setLng] = useState(null);

  const center = {lat: latitude, lng: longitude};

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setLat(null);
        setLng(null);
      }, () => {});
    } else {}
  }

  return (
  <LoadScript googleMapsApiKey="AIzaSyC526zoNUjyiZlFOXmIy7_KGgaxcj7ecIo">
      <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      options={mapDefaultOptions}
      center={center}
      // 0: earth, 3: continent, 4: large islands, 6: large rivers
      // 10: large roads, 15: buildings, ~20
      zoom={6}>
        <MarkerClusterer 
        options={imageOptions}>
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
      <button onClick={getLocation}>000</button>
      <Link className="linkComponent" to="/rg/nhs">
        <RoundRectangle textAlign="center" btnText="11개의 시설 보러가기"/>
      </Link>
  </LoadScript>
  );
};

export default MapBlock;

