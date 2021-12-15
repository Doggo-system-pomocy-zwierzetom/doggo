import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Upload from '../components/UploadImage';
import { fetchAdoptions } from '../api';
import axios from 'axios';
const StyledAdoptionView = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export default function AdoptionView() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // axios.get('/adoptions').then((res) => console.log(res.data));
    axios.get('/adoptions').then((res) => setData(res.data));

    // getData();
  }, []);

  return (
    <StyledAdoptionView>
      <h1>Adoptuj</h1>
      {data.map((e: any) => {
        return (
          <AdoptionContainer key={e.id} id={e.id} name={e.name} description={e.description} image={e.image} />
        );
        // <p>{e.name}</p>;
      })}
    </StyledAdoptionView>
  );
  // return (
  //     <StyledAdoptionView>
  //       <h1>Adoptuj</h1>
  //       {adoptions.map((e:any, index:any) => <li key={index}>
  //       <AdoptionContainer id={e.id} name={e.name} description={e.description} image={e.image}/>
  //                                                       </li>)}
  //     </StyledAdoptionView>
  //   );
}
