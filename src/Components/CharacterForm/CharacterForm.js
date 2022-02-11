import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import style from "./CharacterForm.module.css";

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
    if (characterName.trim().length === 0 || characterAge.trim().length === 0) {
      return <div>Please enter a valid name and age (non-empty values</div>;
    }
    if (+characterAge < 1) {
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
    <Card className={style.input}>
      <form onSubmit={saveCharacterInfoHandler}>
        <label htmlFor="characterName">Character</label>
        <input
          id="characterName"
          type="text"
          value={characterName}
          onChange={characterNameChangeHandler}
        />
        <label htmlFor="characterAge">Age (in years)</label>
        <input
          id="characterAge"
          type="number"
          value={characterAge}
          onChange={characterAgeChangeHandler}
        />
        <Button type="submit">Add Character</Button>
      </form>
    </Card>
  );
};

export default CharacterForm;
