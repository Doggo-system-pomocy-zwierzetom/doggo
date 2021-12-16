// import React from 'react';
import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import MissingContainer from '../components/MissingContainer';
import AddMissingButton from '../components/AddMissingButton';
import AddMissingContainer from '../components/AddMissingContainer';
import BackgroundMap from '../components/BackgroundMap';

const StyledMissing = styled.main`
  /* height: calc(100vh - 3.5rem); */
  height: 100vh;
  width: 100%;
  .missing-container {
    position: absolute;
    left: 0;
    top: 0;
    margin: 4rem 0.5rem;
    z-index: 1;
  }
  .add-missing-button {
    position: absolute;
    right: 0;
    top: 0;
    margin: 4rem 0.5rem;
    z-index: 1;
  }
  .add-missing-container {
    position: absolute;
    left: 0;
    top: 0;
    margin: 4rem 0.5rem;
    z-index: 1;
  }
`;

export default function MissingView() {
  const [isAddMissingClicked, setIsAddMissingClicked] = useState(false);

  const [data, setData] = useState([]);
  // const [latitude, setLatitude] = useState(50.8210857);
  // const [longitude, setLongitude] = useState(19.0765357);
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: 50.8210857,
      lng: 19.0765357,
    },
  });

  async function getData() {
    await fetch('/api/getAll/getMissings.php', {})
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log('Latitude is :', position.coords.latitude);
      // console.log('Longitude is :', position.coords.longitude);
      // setLatitude(position.coords.latitude);
      // setLongitude(position.coords.longitude);
      setDefaultProps({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
    // getData();
  }, []);

  return (
    <StyledMissing>
      {/* <p>{defaultProps.center.lat}</p>
      <p>{defaultProps.center.lng}</p> */}
      {!isAddMissingClicked ? (
        <>
          <div className="missing-container">
            <MissingContainer />
          </div>
          <div className="add-missing-button">
            <AddMissingButton setIsAddMissingClicked={setIsAddMissingClicked} />
          </div>
        </>
      ) : (
        <div className="add-missing-container">
          <AddMissingContainer setIsAddMissingClicked={setIsAddMissingClicked} />
        </div>
      )}

      <BackgroundMap props={defaultProps} />
    </StyledMissing>
  );
}
