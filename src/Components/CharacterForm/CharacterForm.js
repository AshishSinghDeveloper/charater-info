import { useState } from "react";
import "./CharacterForm.css";

const CharacterForm = (props) => {
  const [characterName, setCharacterName] = useState("");
  const [characterAge, setCharacterAge] = useState("");

  const characterNameChangeHandler = (event) => {
    setCharacterName(event.target.value);
  };

  const characterAgeChangeHandler = (event) => {
    setCharacterAge(event.target.value);
  };

  const saveCharacterInfoHandler = (event) => {
    event.preventDefault();
    if (characterName.length === 0 || characterAge.length === 0) {
      return <div>Please enter a valid name and age (non-empty values</div>;
    }
    if (characterAge < 1) {
      return "Please enter a valid age (>0)";
    }
    const charData = {
      id: Math.random(),
      name: characterName,
      age: characterAge,
    };
    props.onformValues(charData);
    setCharacterName("");
    setCharacterAge("");
  };
  return (
    <form onSubmit={saveCharacterInfoHandler}>
      <div className="character-form__controls">
        <div className="character-form__control">
          <label>Character</label>
          <input
            type="text"
            value={characterName}
            onChange={characterNameChangeHandler}
          />
        </div>
        </div>
        <div className="character-form__controls">
        <div className="character-form__control">
          <label>Age (in years)</label>
          <input
            type="number"
            value={characterAge}
            onChange={characterAgeChangeHandler}
          />
        </div>
      </div>
      <div className="character-form__control">
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default CharacterForm;
