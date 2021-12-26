import styled from 'styled-components';
import MissingContainerElement from './MissingContainerElement';
const StyledMissingContainer = styled.div`
  max-width: 550px;
  padding: 1.5rem;
  background: white;
  border-radius: 0.2rem;
  width: 33vw;
  min-width: 25rem;
  .title {
    font-size: 1.5em;
    font-weight: 600;
  }
`;
function MissingContainer({ data, selectedItem, setSelectedItem, setCordinates }: any) {
  console.log(selectedItem);
  return (
    <StyledMissingContainer>
      <p className="title">Zaginione zwierzęta w okolicy</p>
      <div className="missing-catalog">
        {data.map((e: any, index: number) => {
          return (
            <MissingContainerElement
              data={e}
              index={index}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              setCordinates={setCordinates}
            />
          );
        })}
      </div>
    </StyledMissingContainer>
  );
}
export default MissingContainer;
