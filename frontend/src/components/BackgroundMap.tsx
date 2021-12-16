import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
const defaultMapOptions = {
  fullscreenControl: false,
};

export default function BackgroundMap({ props }: any) {
  const [cordinates, setCordinates] = useState(props);
  useEffect(() => {
    setCordinates(props);
    console.log(props);
  }, [props]);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: '' }}
      center={cordinates.center}
      defaultZoom={11}
      options={defaultMapOptions}
    >
      <AnyReactComponent lat={50.8231985} lng={19.1153909} text="WIMiI" />
    </GoogleMapReact>
  );
}

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

// function TheMap(props: any) {
//   useEffect(() => {}, [props]);

//   useEffect(() => {
//     setCordinates(props);
//   }, [props]);

//   return (
//     <GoogleMapReact
//       yesIWantToUseGoogleMapApiInternals
//       bootstrapURLKeys={{ key: 'THE KEY' }}
//       defaultZoom={11}
//       center={cordinates.center}
//     ></GoogleMapReact>
//   );
// }
