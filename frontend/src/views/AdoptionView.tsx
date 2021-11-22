import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';

import { useEffect, useState } from 'react';

const StyledAdoptionView = styled.div``;

export default function AdoptionView() {
  const [data, setData] = useState([]);

  async function getData() {
    await fetch('/getAll/getUsers.php', {
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
        setData(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledAdoptionView>
      <h1>Adoptuj</h1>
      {data.map((e: any) => {
        return <p>{e.mail}</p>;
      })}
      <AdoptionContainer />
    </StyledAdoptionView>
  );
}
