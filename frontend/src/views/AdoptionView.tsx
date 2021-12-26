import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Upload from '../components/UploadImage';
import { fetchAdoptions } from '../api';
import axios from 'axios';
const StyledAdoptionView = styled.main`
  margin: 0 auto;
`;
const profile: any = localStorage.getItem('profile') || null;
const token: any = profile ? JSON.parse(profile).token : 'dupa';
console.log(JSON.parse(profile));
function addAdoption() {
  axios
    .post(
      '/adoptions',
      {
        name: 'Fred',
        userMail: 'random@mail.com',
        shelterName: 'asdasd',
        image: 'sadadasdsa',
        description: 'asdasd',
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(function (response) {
      console.log(response);
    });
}
export default function AdoptionView() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // axios.get('/adoptions').then((res) => console.log(res.data));
    axios.get('/adoptions').then((res) => setData(res.data));

    // getData();
  }, []);
  console.log(data);

  return (
    <StyledAdoptionView>
      <button onClick={() => addAdoption()}>Dodaj adopcje</button>
      <h1>Adoptuj</h1>
      {data.map((e: any) => {
        return (
          <AdoptionContainer
            key={e.id}
            id={e._id}
            name={e.name}
            description={e.description}
            image={e.image}
          />
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
