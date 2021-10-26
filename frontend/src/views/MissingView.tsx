// import React from 'react';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import MissingContainer from '../components/MissingContainer';
import AddMissingButton from '../components/AddMissingButton';
import AddMissingContainer from '../components/AddMissingContainer';

const StyledMissing = styled.div`
  height: calc(100vh - 3.5rem);
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

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 50.8210857,
    lng: 19.0765357,
  },
  zoom: 11,
};

const defaultMapOptions = {
  fullscreenControl: false,
};

export default function MissingView() {
  const [isAddMissingClicked, setIsAddMissingClicked] = useState(false);

  return (
    <StyledMissing>
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

      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={defaultMapOptions}
      >
        <AnyReactComponent lat={50.8231985} lng={19.1153909} text="WIMiI" />
      </GoogleMapReact>
    </StyledMissing>
  );
}
