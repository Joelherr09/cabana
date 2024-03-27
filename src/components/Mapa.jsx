import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -30.1962765,
      lng: -71.438246
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="h-[300px] w-full md:w-[50%] relative z-0 mx-auto flex">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-30.1962765}
          lng={-71.438246}
          text="Guanaqueros"
        />
      </GoogleMapReact>
    </div>
  );
}