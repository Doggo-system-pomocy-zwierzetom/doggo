import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ShelterContainer from '../components/ShelterContainer';

const StyledNeedsView = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .title {
    color: var(--dark-grey);
    font-weight: 700;

    text-shadow: 0px 0px 15px var(--text-shadow-white);
    margin: 2rem 2rem 2rem 2rem;
  }
`;

export default function NeedsView() {
  const [data, setData] = useState([{}]);
  async function getData() {
    await fetch('/shelters', {})
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledNeedsView>
      <h1 className="title">Schroniska</h1>
      {data.map((e: any) => {
        return (
          <ShelterContainer key={e.id} name={e.name} email={e.email} food={e.food} equipment={e.equipment} />
        );
      })}
    </StyledNeedsView>
  );
}
