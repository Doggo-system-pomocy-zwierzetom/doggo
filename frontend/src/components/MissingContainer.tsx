import styled from 'styled-components';
import MissingContainerElement from './MissingContainerElement';
const StyledMissingContainer = styled.div`
  max-width: 550px;
  padding: 1.5rem;
  background: var(--outline-lighten);
  /* box-shadow: inset 0 0 10px var(--outline); */
  box-shadow: inset -20px 0px 20px -10px var(--outline);
  border-radius: 0.2rem;
  width: 33vw;
  height: 100%;
  background: linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url("https://i.ibb.co/gy897P8/tlo.png");
  
  min-width: 25rem;
  .title {
    font-size: 1.5em;
    font-weight: 600;
  }
`;
function MissingContainer({ data, selectedItem, setSelectedItem, setCordinates, setDeleteMissing }: any) {
  // console.log(selectedItem);
  console.log(data.length);

  return (
    <StyledMissingContainer>
      <p className="title">Zaginione zwierzęta w okolicy</p>
      <div className="missing-catalog">
        {data.length &&
          data.map((e: any, index: number) => {
            return (
              <MissingContainerElement
                data={e}
                index={index}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                setCordinates={setCordinates}
                setDeleteMissing={setDeleteMissing}
              />
            );
          })}
      </div>
    </StyledMissingContainer>
  );
}
export default MissingContainer;
