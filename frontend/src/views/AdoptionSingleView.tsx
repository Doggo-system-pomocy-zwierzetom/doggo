import styled from 'styled-components';
import { useParams } from 'react-router';

import { useEffect, useState } from 'react';

const StyledAdoptionSingleView = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  justify-content: stretch;
  background: #ccc;
  /* margin: 1rem 3vw; */
  padding: 1rem;
  /* min-height: 10rem; */
  gap: 1rem;
  text-align: start;

  .adoption_image {
    max-width: 500px;
    max-height: 500px;
    height: 100%;
    width: 100%;
    margin: auto 0;
  }
  .adoption_info {
    /* width: 100%; */
  }

  .animal-name {
    font-size: 1.2em;
    font-weight: 600;
  }
  max-width: 800px;
  margin: 0 auto;
`;

export default function AdoptionSingleView() {
  const { id }: any = useParams();
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function getData() {
    // await fetch(`/getRow/getAdoption.php?id=${id}`, {
    await fetch(`/single-adoption/${id}`, {
      // method: 'GET',
      // headers: {
      //   // 'Access-Control-Allow-Origin': '*',
      //   // Accept: 'application/json',
      //   // 'Content-Type': 'application/json',
      // },
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        setImage(data[0].image);
        setName(data[0].name);
        setDescription(data[0].description);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledAdoptionSingleView>
      <h1>{name}</h1>
      <img className="adoption_image" src={`data:image/png;base64, ${image}`} alt="" />
      <div className="adoption_info">
        <p>{description}</p>
      </div>
    </StyledAdoptionSingleView>
  );
}
