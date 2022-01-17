import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import image from '../img/pin.svg';
const defaultMapOptions = {
  fullscreenControl: false,
};

export default function FormMap({ props, setOnClickLocation, onClickLocation, data }: any) {
  // const [cordinates, setCordinates] = useState(props);
  // useEffect(() => {
  //   setCordinates(props);
  // }, [props]);
  console.log(data);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: '' }}
      center={props.center}
      onClick={(e) => {
        setOnClickLocation({ lat: e.lat, lng: e.lng });
      }}
      defaultZoom={14}
      options={defaultMapOptions}
    >
      {data.map((e: any, index: number) => (
        <AnyReactComponent
          lat={onClickLocation.lat}
          lng={onClickLocation.lng}
          text={`${e.name}`}
          index={index}
        />
      ))}
    </GoogleMapReact>
  );
}

const AnyReactComponent = ({ text, lat, lng, index }: any) => (
  <img
    onClick={() => {
      // setSelectedItem(index);
    }}
    className={`pin`}
    src={`${image}`}
    alt=""
  />
);
