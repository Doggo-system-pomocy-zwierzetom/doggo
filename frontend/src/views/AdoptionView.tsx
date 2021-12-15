import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import Upload from '../components/UploadImage';

const StyledAdoptionView = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default function AdoptionView() {
  const adoptions = useSelector((state:any)=>state.adoptions);
  const [data, setData] = useState([]);

  async function getData() {
    // await fetch('/getAll/getAdoptions.php', {
    await fetch('/adoptions', {
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
