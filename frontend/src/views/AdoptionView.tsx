import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';

import { useEffect, useState } from 'react';

const StyledAdoptionView = styled.div``;

export default function AdoptionView() {
  const [data, setData] = useState(Array);

  async function getData() {
    // fetch('/api/faults/list', { credentials: 'include' })
    fetch('https://localhost:3307/getAll/getUsers.php', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
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
      <AdoptionContainer />
    </StyledAdoptionView>
  );
}

// "proxy": "http://localhost:3307/getAll",
