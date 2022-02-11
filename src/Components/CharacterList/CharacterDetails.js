import Wrapper from "../Helper/Wrapper";

const CharacterDetails = (props) => {
  return <Wrapper>
    <span>{props.name} ({props.age} years old)</span>
  </Wrapper>
}

export default CharacterDetails;