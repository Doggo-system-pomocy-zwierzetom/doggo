import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState, useContext } from 'react';
import Upload from '../components/UploadImage';
import { fetchAdoptions } from '../api';
import { LoginInfoContext } from '../contexts/LoginInfoContextProvider';

import axios from 'axios';
const StyledAdoptionView = styled.main`
  .view-header {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
`;
const profile: any = localStorage.getItem('profile') || null;
const token: any = profile ? JSON.parse(profile).token : 'dupa';
// console.log(JSON.parse(profile));
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
      // console.log(response);
    });
}
export default function AdoptionView() {
  const [user, setUser] = useContext(LoginInfoContext);

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // axios.get('/adoptions').then((res) => console.log(res.data));
    axios.get('/adoptions').then((res) => setData(res.data));

    // getData();
  }, []);
  // console.log(data);

  return (
    <StyledAdoptionView>
      <div className="view-header">
        <h1>Adoptuj</h1>
        {user.shelter && <button onClick={() => addAdoption()}>Dodaj adopcje</button>}
      </div>
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
