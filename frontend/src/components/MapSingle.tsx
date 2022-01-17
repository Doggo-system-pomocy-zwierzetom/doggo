import GoogleMapReact from 'google-map-react';
import image from '../img/pin.svg';
import styled from 'styled-components';

const StyledMapSingle = styled.div`
  height: 50vmax;
  /* height: 50vmax; */
  /* height: 60%; */
  /* height: ; */
  /* display: flex; */
  /* width: 100vw; */
  /* position: relative; */
`;

const defaultMapOptions = {
  fullscreenControl: false,
};

export default function MapSingle({ props, setOnClickLocation, data, selectedItem, setSelectedItem }: any) {
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
