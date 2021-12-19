import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MissingSingleContainer from '../components/MissingSingleContainer';
import MissingContainer from '../components/MissingContainer';
import AddMissingButton from '../components/AddMissingButton';
import AddMissingContainer from '../components/AddMissingContainer';
import MapSingle from '../components/MapSingle';
import { useParams } from 'react-router';

const StyledMissingSingleView = styled.main`
  /* height: calc(100vh - 3.5rem); */
  /* height: 100vh; */
  /* height: 100%; */
  max-width: 100vw;
  display: flex;
  flex-direction: column;

  .pin {
    width: 5rem;
    height: 5rem;

    position: absolute;
    top: -5rem;

    left: -2.5rem;
    /* cursor: pointer; */
    /* &.selected {
      width: 10rem;
      height: 10rem;
      padding: 0 4rem 5rem 1rem;
    } */
  }
`;

export default function MissingSingleView() {
  const { id }: any = useParams();

  const [data, setData] = useState({
    name: 'name1',
    photo: 'https://ipla.pluscdn.pl/dituel/cp/d3/d37xo712edjjpmgi3hm3w51m9zb5e3pa.jpg',
    description: 'Piesek taki',
    latitude: 50.81943861899984,
    longitude: 19.13413241318411,
  });
  const [onClickLocation, setOnClickLocation] = useState({ lat: 50.8210857, lng: 19.0765357 });
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: data.latitude,
      lng: data.longitude,
    },
  });

  const [selectedItem, setSelectedItem] = useState<number>();

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
      // setDefaultProps({
      //   center: {
      //     lat: position.coords.latitude,
      //     lng: position.coords.longitude,
      //   },
      // });
    });
    // getData();
  }, []);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    console.log(onClickLocation);
  }, [onClickLocation]);

  return (
    <StyledMissingSingleView>
      <MissingSingleContainer data={data} />
      <MapSingle
        props={defaultProps}
        data={data}
        setOnClickLocation={setOnClickLocation}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </StyledMissingSingleView>
  );
}
