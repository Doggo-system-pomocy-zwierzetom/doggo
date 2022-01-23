import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MissingSingleContainer from '../components/MissingSingleContainer';
import MissingContainer from '../components/MissingContainer';
import AddMissingButton from '../components/AddMissingButton';
import AddMissingContainer from '../components/AddMissingContainer';
import MapSingle from '../components/MapSingle';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

type Missing = {
  latitude: number;
  longitude: number;
  image: string;
  title: string;
  description: string;
};

const StyledMissingSingleView = styled.main`
  max-width: 1300px;
  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 4.6rem 3vw 1rem 3vw;

  .name {
    color: var(--dark-grey);
    font-weight: 700;
    font-size: 2.5em;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 3rem;
    text-shadow: 0px 0px 15px var(--text-shadow-white);
  }

  .btn-back {
    background: var(--dark-grey);
    margin: 0.7rem 0;
    padding: 0.5rem 2rem;
    color: var(--white);
    border: none;
    font-size: 1.2em;
    border-radius: 5px;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .main {
    display: flex;
    gap: 4vw;
    /* flex-wrap: wrap; */
    .column-left {
      /* width: 80%; */
      min-width: 60%;
    }
    .column-right {
      min-width: 40%;
      display: flex;
      flex-direction: column;
      .contact {
        margin-top: 2rem;
        width: 100%;
        background: var(--main-01);
        padding: 1rem 1.5rem;
        border-radius: 7px;
      }
    }
  }

  .photo {
    width: 40rem;
    height: 30rem;
    object-fit: contain;
    border-radius: 5px;
    background: #000;
    margin-bottom: 2rem;
  }
`;

export default function MissingSingleView() {
  const { id }: any = useParams();
  const history = useHistory();

  // const [data, setData] = useState({
  //   name: 'name1',
  //   photo: 'https://ipla.pluscdn.pl/dituel/cp/d3/d37xo712edjjpmgi3hm3w51m9zb5e3pa.jpg',
  //   description: 'Piesek taki',
  //   latitude: 50.81943861899984,
  //   longitude: 19.13413241318411,
  // });

  const [data, setData] = useState<Missing[]>([
    { latitude: 0, longitude: 0, image: '', title: '', description: '' },
  ]);
  // const [onClickLocation, setOnClickLocation] = useState({ lat: 50.8210857, lng: 19.0765357 });
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: data[0].latitude,
      lng: data[0].longitude,
    },
  });

  const [selectedItem, setSelectedItem] = useState<number>();

  async function getData() {
    await fetch('/missings', {})
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        data = data.filter((e: any) => e._id === id);
        setData(data);
        console.table(data);
      });
  }

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((position) => {
    console.log(data);
    setDefaultProps({
      center: {
        lat: data[0].latitude,
        lng: data[0].longitude,
      },
    });
    // });
    getData();
  }, []);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  // useEffect(() => {
  //   console.log(onClickLocation);
  // }, [onClickLocation]);

  return (
    <StyledMissingSingleView>
      <div className="header">
        <h1 className="name">{data[0].title}</h1>
        <button className="btn-back" onClick={() => history.push('/zaginiecia')}>
          Powrót
        </button>
      </div>
      <div className="main">
        <div className="column-left">
          <img className="photo" src={`${data[0].image}`} alt="Zdjęcie psa." />
          <p className="description">{data[0].description}</p>
        </div>
        <div className="column-right">
          <MapSingle
            props={defaultProps}
            data={data[0]}
            // setOnClickLocation={setOnClickLocation}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <div className="contact">
            <h2>Kontakt</h2>
            <p>email:</p>
          </div>
        </div>
      </div>
      {/* <MissingSingleContainer data={data} /> */}
    </StyledMissingSingleView>
  );
}
