import React, { useState } from "react";
import "./App.css";
import CharacterForm from "./Components/CharacterForm/CharacterForm";
import CharacterList from "./Components/CharacterList/CharacterList";
import AddUser from "./Components/UI/Users/AddUser";

function App() {
  const [charInfo, setCharInfo] = useState('');
  const formValueHandler = (enteredData) => {
    setCharInfo((prevState) => {
      return [enteredData, ...prevState];
    });
  };
  return (
    <React.Fragment>
      <CharacterForm  onformValues={formValueHandler} />
      {charInfo.length > 0 && <CharacterList items={charInfo} />}
    </React.Fragment>
  );
}

export default App;
