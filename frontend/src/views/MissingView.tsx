import { useState, useEffect } from 'react';
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
  .pin {
    /* width: 7rem;
    height: 7rem;
    padding: 2rem; */
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: -3rem;
    left: -1.5rem;
    cursor: pointer;
    &.selected {
      /* transition: height 0.3s; */
      width: 5rem;
      height: 5rem;
      top: -5rem;
      left: -2.5rem;
    }
  }
`;

export default function MissingView() {
  const [isAddMissingClicked, setIsAddMissingClicked] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      name: 'name1',
      photo: 'https://ipla.pluscdn.pl/dituel/cp/d3/d37xo712edjjpmgi3hm3w51m9zb5e3pa.jpg',
      description: 'Piesek taki',
      latitude: 50.81943861899984,
      longitude: 19.13413241318411,
    },
    {
      id: 2,
      name: 'name2',
      photo: 'https://bi.im-g.pl/im/e3/12/14/z21048035V.jpg',
      description: 'Piesek taki',
      latitude: 50.79696106848947,
      longitude: 19.09466313721529,
    },
    {
      id: 3,
      name: 'name3',
      photo:
        'https://sp-ao.shortpixel.ai/client/q_lossless,ret_img,w_768/https://apetete.pl/blog/wp-content/uploads/2019/07/kr%C3%B3l-lew-768x495.jpeg',
      description: 'Piesek taki',
      latitude: 50.803036789758025,
      longitude: 19.13706349732271,
    },
  ]);
  const [onClickLocation, setOnClickLocation] = useState({ lat: 50.8210857, lng: 19.0765357 });
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: 50.8210857,
      lng: 19.0765357,
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
      setDefaultProps({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
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
    <StyledMissing>
      {/* <p>{defaultProps.center.lat}</p>
      <p>{defaultProps.center.lng}</p> */}
      {!isAddMissingClicked ? (
        <>
          <div className="missing-container">
            <MissingContainer
              data={data}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              setCordinates={setDefaultProps}
            />
          </div>
          <div className="add-missing-button">
            {/* <AddMissingButton setIsAddMissingClicked={setIsAddMissingClicked} /> */}
          </div>
        </>
      ) : (
        <div className="add-missing-container">
          <AddMissingContainer setIsAddMissingClicked={setIsAddMissingClicked} />
        </div>
      )}

      <BackgroundMap
        props={defaultProps}
        data={data}
        setOnClickLocation={setOnClickLocation}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </StyledMissing>
  );
}
