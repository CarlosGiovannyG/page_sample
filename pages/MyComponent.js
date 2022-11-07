import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "70%",
  height: "70vh",
};

/**
 * "geo_lat": 25762772,
    "geo_lng": -80256371,
 */

/**
 * 
 */

const center = {
  lat: 25.79743173202709,
  lng: -80.23974525264848,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDJmRW5qXrs_eK6-mG2baNdHnoe519dW9M",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        position={{
          LatLng : 25.763002741453196,
          LatLngLiteral: -80.19853943119357,
        }}
        title="estoy aca"
      />
       
    </GoogleMap>
  ) : (
    <></>
  );
}

 
export default React.memo(MyComponent);
