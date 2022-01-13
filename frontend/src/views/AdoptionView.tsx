import AdoptionContainer from '../components/AdoptionContainer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState, useContext } from 'react';
import Upload from '../components/UploadImage';
import { fetchAdoptions } from '../api';
import { LoginInfoContext } from '../contexts/LoginInfoContextProvider';
import axios from 'axios';
import AddAdoptionContainer from '../components/AddAdoptionContainer';

const StyledAdoptionView = styled.main`
  .view-header {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
`;
const profile: any = localStorage.getItem('profile') || null;
const token: any = profile ? JSON.parse(profile).token : '';
// console.log(JSON.parse(profile));

export default function AdoptionView() {
  const [user, setUser] = useContext(LoginInfoContext);
  const [isAddAdoptionClicked, setIsAddAdoptionClicked] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // axios.get('/adoptions').then((res) => console.log(res.data));
    axios.get('/adoptions').then((res) => setData(res.data));

    // getData();
  }, [[],isAddAdoptionClicked]);
  // console.log(data);

  return (
    <StyledAdoptionView>
      <div className="view-header">
        <h1>Adoptuj</h1>
        {user?.shelter && <button onClick={() => setIsAddAdoptionClicked(true)}>Dodaj adopcje</button>}
      </div>
      {isAddAdoptionClicked ? <AddAdoptionContainer setIsAddMissingClicked={setIsAddAdoptionClicked}></AddAdoptionContainer> : ''}
      {data.map((e: any) => {
        return (
          <AdoptionContainer
            key={e.id}
            id={e._id}
            name={e.name}
            description={e.description}
            image={e.image}
            shelterName = {e.shelterName}
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
