import { useState, useRef } from "react";
import Wrapper from "../Helper/Wrapper";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import style from "./CharacterForm.module.css";

const CharacterForm = (props) => {
  const enteredcharacterName = useRef();
  const enteredcharacterAge = useRef();
  const [error, setError] = useState();

  const saveCharacterInfoHandler = (event) => {
    event.preventDefault();
    const characterName = enteredcharacterName.current.value;
    const characterAge = enteredcharacterAge.current.value;
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
    enteredcharacterName.current.value = '';
    enteredcharacterAge.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
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
            ref= {enteredcharacterName}
          />
          <label htmlFor="characterAge">Age (in years)</label>
          <input
            id="characterAge"
            type="number"
            ref={enteredcharacterAge}
          />
          <Button type="submit">Add Character</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default CharacterForm;
