import React from 'react';

import Card from './Card';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const center = {
  lat: 31.557659,
  lng: 75.265892
};
const center1 = {
  lat: 31.557659,
  lng: 75.276092
};
const center2 = {
  lat: 31.557659,
  lng: 75.285892
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA6cEkMrbMeTALmWycVmITu28rNUaoT54M"
  })

  const [myMap, setMap] = React.useState(null)
  const [markers, setMarkers] = React.useState([])
  const [activeMarker, setActiveMarker] = React.useState(null)

  const divStyle = {
    background: "#FFFFFF",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    color: "red",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "26px",
    letterSpacing: "-0.03em",
    borderRadius: "100px",
    padding: "1rem 2rem",
    zIndex: "1",
    position: "absolute"
  }

  

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)

  }, [])

  const activeMarkerhandler = (data) =>{
    if(activeMarker === data){
      setActiveMarker(null);
    }
    else{
      setActiveMarker(data);
    }
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
            disableDefaultUI:true,
            mapId:"9063fb768adfb3d1",
          }
        }
      >
        

        <Marker position={center} onClick={() => activeMarkerhandler("point-1")}  icon={{url:"/Location.svg", }} >
          {activeMarker === "point-1"? (
          <InfoWindow style={divStyle} >
            <Card></Card>
          </InfoWindow>
          ): null}
        </Marker>

        <Marker position={center1} onClick={() => activeMarkerhandler("point-2")} icon={{url:"/Location.svg", }} >
          {activeMarker === "point-2"? (
          <InfoWindow style={divStyle} >
            <Card></Card>
          </InfoWindow>
          ): null}
        </Marker>

        <Marker position={center2} onClick={() => activeMarkerhandler("point-3")} icon={{url:"/Location.svg", }} >
          {activeMarker === "point-3"? (
          <InfoWindow style={divStyle}>
            <Card></Card>
          </InfoWindow>
          ): null}
        </Marker>
        
      </GoogleMap>
  ) : <></>
}

export default (MyComponent)