import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';

import { useEffect, useState } from 'react';

const StyledNeedsView = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default function NeedsView() {
  const [data, setData] = useState([]);

  async function getData() {
    await fetch('/api/getAll/getShelters.php', {
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
    <StyledNeedsView>
      <h1>Schroniska</h1>
      {data.map((e: any) => {
        return (
          <AdoptionContainer key={e.id} id={e.id} name={e.name} description={e.description} image={e.image} />
        );
        // <p>{e.name}</p>;
      })}
    </StyledNeedsView>
  );
}
