// import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const StyledMissing = styled.div`
  /* height: calc(100vh - 3.5rem); */
  height: 100vh;
  width: 100%;
`;

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function Missing() {
  const defaultProps = {
    center: {
      lat: 50.8210857,
      lng: 19.0765357,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <StyledMissing>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </StyledMissing>
  );
}
