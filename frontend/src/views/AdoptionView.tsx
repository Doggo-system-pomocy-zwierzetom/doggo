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
  padding-bottom: 1rem;
  .view-header {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    width: 800px;
  }

  .title {
    color: var(--dark-grey);
    font-weight: 700;

    text-shadow: 0px 0px 15px var(--text-shadow-white);
  }

  .btn-adoption {
    color: var(--white);
    margin-right: 1.5rem;
    padding: 0.5rem 1.3rem;
    background: var(--warning);
    border-radius: 0.3rem;
    font-weight: 600;
    font-size: 1.1em;
    cursor: pointer;
    border: none;
    text-decoration: none;
    box-shadow: inset -20px 0px 20px -10px var(--outline);
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
  }, [[], isAddAdoptionClicked]);
  // console.log(data);

  return (
    <StyledAdoptionView>
      <div className="main">
        <div className="view-header">
          <h1 className="title">Adoptuj</h1>
          {user?.shelter && (
            <button className="btn-adoption" onClick={() => setIsAddAdoptionClicked(true)}>
              Dodaj adopcje
            </button>
          )}
          {/* <button className="btn-adoption" onClick={() => setIsAddAdoptionClicked(true)}>
            Dodaj adopcje
          </button> */}
        </div>
        {isAddAdoptionClicked ? (
          <AddAdoptionContainer setIsAddMissingClicked={setIsAddAdoptionClicked}></AddAdoptionContainer>
        ) : (
          ''
        )}
        {data.map((e: any) => {
          return (
            <AdoptionContainer
              key={e.id}
              id={e._id}
              name={e.name}
              description={e.description}
              image={e.image}
              shelterName={e.shelterName}
            />
          );
        })}
      </div>
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
