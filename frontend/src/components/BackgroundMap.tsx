import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import image from '../img/pin-green.svg';
import image2 from '../img/pin.svg';
const defaultMapOptions = {
  fullscreenControl: false,
};

export default function BackgroundMap({
  props,
  setOnClickLocation,
  data,
  selectedItem,
  setSelectedItem,
}: any) {
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
          lat={e.latitude}
          lng={e.longitude}
          text={`${e.name}`}
          index={index}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </GoogleMapReact>
  );
}

const AnyReactComponent = ({ text, lat, lng, index, selectedItem, setSelectedItem }: any) => (
  <img
    onClick={() => {
      setSelectedItem(index);
    }}
    className={`pin ${selectedItem === index && 'selected'}`}
    src={`${selectedItem === index ? image2 : image}`}
    alt=""
  />
);
