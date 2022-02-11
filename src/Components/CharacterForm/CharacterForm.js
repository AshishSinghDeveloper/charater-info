import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import style from "./CharacterForm.module.css";

const CharacterForm = (props) => {
  const [characterName, setCharacterName] = useState("");
  const [characterAge, setCharacterAge] = useState("");
  const [error, setError] = useState();

  const characterNameChangeHandler = (event) => {
    setCharacterName(event.target.value);
  };

  const characterAgeChangeHandler = (event) => {
    setCharacterAge(event.target.value);
  };

  const saveCharacterInfoHandler = (event) => {
    event.preventDefault();
    if (characterName.trim().length === 0 || characterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+characterAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
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

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default CharacterForm;
