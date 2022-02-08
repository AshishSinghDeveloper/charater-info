import {useState} from 'react';

const CharacterForm = (props) => {
  const[characterName, setCharacterName] = useState('');
  const[characterAge, setCharacterAge] = useState('');

  const characterNameChangeHandler = event => {
    setCharacterName(event.target.value);
  }

  const characterAgeChangeHandler = event => {
    setCharacterAge(event.target.value);
  }

  const saveCharacterInfoHandler = (event) => {
    event.preventDefault();
    const charData = {
      id: Math.random(),
      name: characterName,
      age: characterAge
    }
    props.onformValues(charData);
    setCharacterName('');
    setCharacterAge('');
    

  }
  return (
    <div>
      <form onSubmit={saveCharacterInfoHandler}>
        <div>
          <label>UserName</label>
          <input type='text' value={characterName} onChange={characterNameChangeHandler}/>
        </div>
        <div>
          <label >Age</label>
          <input type='number' value={characterAge} onChange={characterAgeChangeHandler}/>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default CharacterForm;
