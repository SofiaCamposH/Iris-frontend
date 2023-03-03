import React, { useEffect } from "react";

import GoogleMapReact from "google-map-react";
import "./styles.css";
import { Image } from "antd";

const LoadingLocationAnimation = () => {
  return (
    <div className="frame">
      <div className="center">
        <div id="circle1" className="circleloading"></div>
        <div id="circle2" className="circleloading"></div>
        <div id="circle3" className="circleloading"></div>
        <span id="loading">Locating user</span>
      </div>
    </div>
  );
};

const PinComponent = () => {
  return (
    <div className="pin-container">
      <div className="circle">
        <Image
          src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
          width={30}
          height={30}
        />
      </div>
      <div className="dot"></div>
    </div>
  );
};
const LocationSensor = () => {
  const [isLocationLoading, setIsLocationLoading] = React.useState(true);
  const [location, setLocation] = React.useState({
    lat: 21.856224793764333,
    lng: -102.28896352909513,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLocationLoading(false);
    }, 3000);
    return () => {
      clearTimeout();
    };
  }, []);

  useEffect(() => {
    getMyLocation();
  }, []);

  const defaultProps = {
    center: {
      lat: location.lat,
      lng: location.lng,
    },
    zoom: 18,
  };

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      setLocation({
        lat: 21.856224793764333,
        lng: -102.28896352909513,
      });
    }
  };

  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {isLocationLoading ? (
        <LoadingLocationAnimation />
      ) : (
        <div style={{ height: "70vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            center={{ lat: location.lat, lng: location.lng }}
            defaultZoom={defaultProps.zoom}
          >
            <PinComponent lat={location.lat} lng={location.lng} text="User" />
          </GoogleMapReact>
        </div>
      )}
    </div>
  );
};

export default LocationSensor;
