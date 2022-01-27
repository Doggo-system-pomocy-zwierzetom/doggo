import GoogleMapReact from 'google-map-react';
import image from '../img/pin.svg';
import styled from 'styled-components';

const StyledMapSingle = styled.div`
  /* height: 50vmax; */
  /* height: 100%; */
  width: 100%;
  height: 30rem;

  /* max-width: 30rem; */
  /* min-width: 30rem; */
  /* height: 50vmax; */
  /* height: 60%; */
  /* height: ; */
  /* display: flex; */
  /* width: 100vw; */
  /* position: relative; */

  .pin {
    width: 5rem;
    position: absolute;
    top: -5rem;
    left: -2.5rem;
  }
`;

const defaultMapOptions = {
  fullscreenControl: false,
};

export default function MapSingle({ props, data, selectedItem, setSelectedItem }: any) {
  // const [cordinates, setCordinates] = useState(props);
  // useEffect(() => {
  //   setCordinates(props);
  // }, [props]);
  console.log(data);
  console.log(props.center);

  return (
    <StyledMapSingle>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        center={{
          lat: data.latitude,
          lng: data.longitude,
        }}
        defaultZoom={14}
        options={defaultMapOptions}
      >
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={`${data.name}`}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </GoogleMapReact>
    </StyledMapSingle>
  );
}

const AnyReactComponent = ({ text, lat, lng, index, selectedItem, setSelectedItem }: any) => (
  <img onClick={() => {}} className={`pin`} src={`${image}`} alt="" />
);
