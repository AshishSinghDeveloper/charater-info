import CharacterDetails from "./CharacterDetails";

const CharacterList = (props) => {
  // if(props.items.enteredData.length === 0){
  //   return <div>No character found</div>
  //}
  return (
    <ul>
      {props.items.map((data) => (
        <CharacterDetails name={data.name} age={data.age} key={data.id} />
      ))}
    </ul>
  );
};

export default CharacterList;
