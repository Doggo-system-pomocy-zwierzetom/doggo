import styled from 'styled-components';
import MissingContainerElement from './MissingContainerElement';
const StyledMissingContainer = styled.div`
  max-width: 450px;
  padding: 0 1rem 1.5rem 1rem;
  /* background: var(--outline-lighten); */
  /* box-shadow: inset 0 0 10px var(--outline); */
  box-shadow: inset -20px 0px 20px -10px var(--outline);
  border-radius: 0.2rem;
  width: 33vw;
  height: 100%;
  overflow-y: scroll;

  background: linear-gradient(rgba(255, 255, 255, 0.87), rgba(255, 255, 255, 0.87)),
    url('https://i.ibb.co/gy897P8/tlo.png');

  min-width: 25rem;
  .title {
    color: var(--dark-grey);
    font-size: 1.7em;
    font-weight: 700;
    text-align: center;
    margin: 1.3rem 0;
    text-shadow: 0px 0px 15px var(--text-shadow-white);
  }
  .missing-catalog {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;
function MissingContainer({ data, props, selectedItem, setSelectedItem, setCordinates, setDeleteMissing }: any) {
  // console.log(selectedItem);
  const today = new Date();
  function daysFromToday(date:string):any{
    const dateFormat = new Date(date);
    var diff = Math.abs(today.getTime() - dateFormat.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }
  function sortingFunction(a:any, b:any){
    let timeA :string = a.time;
    let timeB :string = b.time;
    let dateA:any= new Date(timeA);
    let dateB:any= new Date(timeB);
    return dateA - dateB;
}
  return (
    <StyledMissingContainer>
      <p className="title">Zaginione zwierzęta w okolicy</p>
      <div className="missing-catalog">
        {data.length && 
        data.filter((data:any) => (daysFromToday(data.time)<=30))
        .sort(sortingFunction)
          .map((e: any, index: number) => {
            return (
              <div key={index}>
              <MissingContainerElement
                data={e}
                index={index}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                setCordinates={setCordinates}
                setDeleteMissing={setDeleteMissing}
              />
              </div>
            );
          })}
      </div>
    </StyledMissingContainer>
  );
}
export default MissingContainer;
